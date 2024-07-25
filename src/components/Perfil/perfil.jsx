import './Perfil.css'
import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { usePostContext } from '../../components/UserPost/PostContext'
import { useUserProfile, editUserProfile } from './PerfilFunction'
import imgPadrao from '../../assets/img/icones/voluntario/fotoPadrao.jpg'

function Perfil() {
  const { user } = useUserProfile()
  const { posts } = usePostContext()
  const [userPosts, setUserPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user && posts.length > 0) {
      const filteredPosts = posts.filter(post => post.userId === user.id)
      setUserPosts(filteredPosts)
      setLoading(false)
    }
  }, [user, posts])

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="profilePage">
      <Header />
      <div className="userProfile">
        <div className="profileHeader">
          <div className="userDetails">
            <div className="userIdentity">
              <img src={user.profileImage || imgPadrao} alt={`${user.name}'s profile`} />
              <h1>{user.name}</h1>
            </div>
            <div className="ProfileOverview">
              <div className="userInfo">
                <strong>{userPosts.length}</strong>
                <h3>Posts</h3>
              </div>
              <div className="userInfo">
                <strong>{user.followers}</strong>
                <h3>Seguidores</h3>
              </div>
              <div className="userInfo">
                <strong>{user.following}</strong>
                <h3>Seguindo</h3>
              </div>
            </div>
          </div>
          <div className="profileEdit">
            <p className="userBio">{user.bio}</p>
            <button onClick={editUserProfile}>Edit Profile</button>
          </div>
        </div>
        <hr className="separator" />
        <div className="userGrid">
          {loading ? (
            <div className='warnings'>Carregando posts...</div>
          ) : (
            userPosts.length === 0 ? (
              <div className='warnings' >Você ainda não postou nada!  :(</div>
            ) : (
              userPosts.map((post) => (
                <div className="postGridContent" key={post.id}>
                  {post.imageUrl && <img src={post.imageUrl} alt={`Post ${post.id}`} />}
                  <p>{post.description}</p>
                </div>
              ))
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Perfil
