import { createContext, useContext, useState } from 'react'

const PostContext = createContext()

export const usePostContext = () => useContext(PostContext)

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([])

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  )
}
