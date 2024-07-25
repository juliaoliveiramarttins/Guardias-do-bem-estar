import { useState, useEffect } from 'react'

export const useUserProfile = () => {
  const [user, setUser] = useState({
    posts: 0,
    followers: 0,
    following: 0
  });
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = { posts: 0, followers: 0, following: 0 }
        setUser(userData)
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error)
      }
    };

    const fetchUserPosts = async () => {
      try {
        // Simulando uma chamada para a API para obter postagens do usuário
        const userPosts = []
        setPosts(userPosts)
      } catch (error) {
        console.error('Erro ao obter postagens do usuário:', error)
      }
    }


    fetchUser()
    fetchUserPosts()
  }, [])

  return { user, posts }
  
}

export const editUserProfile = async (userData) => {
  try {
      // Aqui você deve substituir pela lógica de requisição para editar o perfil do usuário
      const response = await axios.put(`${baseURL}/api/Profile`, userData)

      if (response.status === 200) {
          console.log('Perfil do usuário editado com sucesso:', response.data)
          return response.data; // Retorna os dados atualizados do usuário se necessário
      } else {
          console.error('Erro ao editar perfil do usuário. Status:', response.status)
          throw new Error('Erro ao editar perfil do usuário')
      }
  } catch (error) {
      console.error('Erro ao editar perfil do usuário:', error)
      throw new Error('Ocorreu um erro ao editar o perfil do usuário')
  }
}
