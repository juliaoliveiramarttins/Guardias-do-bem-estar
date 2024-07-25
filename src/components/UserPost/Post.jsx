import axios from 'axios';
import './Post.css'
import { useState } from 'react';
import { usePostContext } from './PostContext';
import { useUserProfile } from '../Perfil/PerfilFunction';
import AddFiles from '../../assets/img/icones/feed/files.png';
import imgPadrao from '../../assets/img/icones/voluntario/fotoPadrao.jpg';

const Post = ({ handleClose }) => {
    const baseURL = 'http://localhost:5173'
    const { user } = useUserProfile();
    const [postText, setPostText] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const { posts, setPosts } = usePostContext();
    const [error, setError] = useState(null); // Estado para gerenciar erros

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const handleRemoveFile = () => {
        setSelectedFile(null);
    }

    const handlePostSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('description', postText);
        if (selectedFile) {
            formData.append('file', selectedFile);
        }

        try {
            const response = await axios.post(`${baseURL}/api/PostAPI`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const newPost = {
                id: response.data.id,
                imageUrl: response.data.imageUrl,
                description: response.data.description,
            };

            setPosts([...posts, newPost]);
            setSelectedFile(null);
            setPostText('');
            handleClose();
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Não foi possível criar o post. Por favor, tente novamente mais tarde.')
        }
    }

    return (
        <div className='postPage'>
            <div className='postBox'>
                <div className='postTop'>
                    <h1>Criar Post</h1>
                    <button className='closeButton' onClick={handleClose}>X</button>
                </div>
                <hr className='separator' />
                <form onSubmit={handlePostSubmit}>
                    <div className='post'>
                        <div className="postUser">
                            {user ? (
                                <div className="postPerfil">
                                    <img
                                        src={user.profileImage || imgPadrao}
                                        alt={`${user.name}'s profile`}
                                        className='profileImage'
                                    />
                                    <h2 className='profileName'>{user.name}</h2>
                                </div>
                            ) : (
                                <p>Carregando...</p>
                            )}
                        </div>

                        <textarea
                            className='editableContent'
                            placeholder="Compartilhe o que está pensando:"
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                            type="text"
                        />
                    </div>
                    <div className='postFile'>
                        <div className='addFiles'>
                            <h2>Adicione uma foto</h2>
                            <div className='files'>
                                <label>
                                    <img alt="Add Files" src={AddFiles} />
                                    <input type="file" id="fileInput" className="fileInput" onChange={handleFileSelect} />
                                </label>
                            </div>
                        </div>
                        <div className='addedFiles'>
                            {selectedFile && (
                                <div className='selectedFile'>
                                    <p>{selectedFile.name}</p>
                                    <button type="button" onClick={handleRemoveFile}>Remover</button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='send'>
                        <button className='sendButton' type='submit'>Postar</button>
                    </div>
                </form>
            </div>
            {/* Exibição de erro se houver */}
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Post;
