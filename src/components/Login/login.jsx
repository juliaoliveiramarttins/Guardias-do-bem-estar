import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import './Login.css'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [erro, setErro] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            username,
            password,
        }

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })

            if (response.ok) {
                navigate('/homepage')
            } else {
                console.log('Login failed')
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()

        if (username === 'seuNickname' && password === 'suaSenha') {
            navigate('/homepage');
        } else {
            setErro('Nome de usuário ou senha incorretos.')
        }
    }

    const handleSignUpClick = () => {
        navigate('/cadastro')
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="login">
            <div className="loginBox">
                <div className="login-access">
                    <h1>Bem vinda</h1>
                    <hr />
                    <h2>Faça login para entrar na nossa comunidade!</h2>

                    <form className="access" onSubmit={handleLogin}>
                        <div className="accessGroup">
                            <label htmlFor="usuaria" />
                            <input
                                type="text"
                                id="usuaria"
                                name="usuaria"
                                placeholder="Usuária"
                                className="inputField"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="accessGroup">
                            <label htmlFor="senha" />
                            <div className="passwordInputWrapper">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="senha"
                                    name="senha"
                                    placeholder="Senha"
                                    className="inputField"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <div className="passwordToggleIcon" onClick={toggleShowPassword}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                        </div>

                        <button type="submit">Entrar</button>

                        {erro && <p>{erro}</p>}

                        <div className="redefinirSenha">
                        <div className="redefinirSenha">
                            <a href="/cadastro">Esqueci minha senha</a>
                        </div>
                        </div>
                    </form>

                    <div className="newUser">
                        <hr />
                        <h1>É nova por aqui?</h1>
                        <button type="button" onClick={handleSignUpClick}>
                            Criar conta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
