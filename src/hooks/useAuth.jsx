import { useState } from 'react'

export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || null)

  const login = (token) => {
    setToken(token)
    localStorage.setItem('token', token)
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token')
    // Aqui você pode adicionar qualquer lógica adicional, como limpar cookies, etc.
    console.log("Logout realizado")
  }

  return { token, login, logout }
}
