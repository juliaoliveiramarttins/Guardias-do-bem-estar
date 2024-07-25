import './Homepage.css';
import Header from '../Header/Header';
import Pagination from '../Paginacao/Pagination';
import FeedItem from './Feed/Feed';
import { usePostContext } from '../../components/UserPost/PostContext';
import { useUserProfile } from '../Perfil/PerfilFunction';

import React, { useState, useEffect } from 'react';

function Homepage() {
  const { user } = useUserProfile(); // Obtendo o usuário logado
  const { posts } = usePostContext(); // Obtendo as postagens do contexto
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Filtrando os posts do usuário logado
  const userPosts = posts.filter(post => post.userId === user.id);

  // Lógica para calcular os índices dos posts a serem exibidos na página atual
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = userPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Função para alterar a página
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='homepage'>
      <Header />
      <div className="feed">
        <div className="headerGridPosts">
          {currentPosts.map(post => (
            <FeedItem key={post.id} imageUrl={post.imageUrl} title={post.title} description={post.description} />
          ))}
        </div>
        <Pagination postsPerPage={postsPerPage} totalPosts={userPosts.length} paginate={paginate} />
      </div>
    </div>
  );
}

export default Homepage;
