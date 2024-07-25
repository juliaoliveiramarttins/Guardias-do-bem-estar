import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Preloading from './components/PreLoading/PreLoading'
import AppRoutes from './AppRoutes'
import { PostProvider } from './components/UserPost/PostContext'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 4000) // simula o loading de 4s


    return () => clearTimeout(timeout)
  }, [loading])

  return (
    <PostProvider >
      <div className="App">
        <Router>
          {loading ? <Preloading /> : <AppRoutes />}
        </Router>
      </div >
    </PostProvider>

  )
}

export default App
