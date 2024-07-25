import './Cadastro.css'
import { estadosBrasileiros } from './Estados'


import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


function Cadastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [idade, setIdade] = useState('')
  const [cpf, setCpf] = useState('')
  const [genero, setGenero] = useState('')
  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [cidade, setCidade] = useState('')
  const [endereco, setEndereco] = useState('')
  const [numero, setNumero] = useState('')
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitForm, setSubmitForm] = useState(false)
  const navigate = useNavigate()

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const validateFields = () => {
    const passwordsMatch = password === confirmPassword
    setIsSubmitted(true)

    return (
      nome &&
      email &&
      telefone &&
      idade &&
      cpf &&
      genero &&
      cep &&
      uf &&
      cidade &&
      endereco &&
      numero &&
      nickname &&
      password &&
      confirmPassword &&
      passwordsMatch
    )
  }

  

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateFields()) {
      return
    }

    setSubmitForm(true)
  }

  const handleCancel = () => {
    navigate('/')
  }

  const handleSuccess = () => {
    navigate('/voluntaria')
  }

  return (
    <div className="cadastro-usuario">
      <div className="cadastro-usuario-box">
        <div className="cadastro-usuario-form">
          <h1>Cadastrar-se</h1>
          <form onSubmit={handleSubmit} className="form">
            {/* NOME DA USUÁRIA */}
            <div className="form-group">
              <label htmlFor="nome" />
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            {/* E-MAIL */}
            <div className="form-group">
              <label htmlFor="email" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Endereço de email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* TELEFONE DA USUSÁRIA */}
            <div className="form-group">
              <label htmlFor="telefone" />
              <input
                type="text"
                id="telefone"
                name="telefone"
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </div>

            <div className="form-group-box">
              {/* IDADE */}
              <div className="form-group">
                <label htmlFor="idade" />
                <input
                  type="text"
                  id="idade"
                  name="idade"
                  placeholder="Digite sua idade"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  required
                />
              </div>

              {/* GÊNERO DA USUÁRIA */}
              <div className="form-group">
                <label htmlFor="genero" />
                <select
                  id="genero"
                  name="genero"
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                  required
                >
                  <option value="">Gênero</option>
                  <option value="Cis">Cis</option>
                  <option value="Trans">Trans</option>
                </select>
              </div>

              {/* CPF DA USUÁRIA */}
              <div className="form-group">
                <label htmlFor="nascimento" />
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  placeholder="CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  required
                />
              </div>

            </div>

            <div className="form-group-box">
              {/* CEP DA USUÁRIA */}
              <div className="form-group">
                <label htmlFor="cep" />
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  placeholder="CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  required
                />
              </div>

              {/* ESTADO DA USUÁRIA */}
              <div className="form-group">
                <label htmlFor="uf" />
                <select
                  id="uf"
                  name="uf"
                  placeholder="uf"
                  value={uf}
                  onChange={(e) => setUf(e.target.value)}
                  required
                >
                  <option value="">Estado...</option>
                  {estadosBrasileiros.map((estado) => (
                    <option key={estado.sigla} value={estado.sigla}>
                      {estado.nome}
                    </option>
                  ))}
                </select>
              </div>

              {/* CIDADE */}
              <div className="form-group">
                <label htmlFor="cidade" />
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  placeholder="Cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group-box">
              {/* ENDEREÇO */}
              <div className="form-group">
                <label htmlFor="endereco" />
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  placeholder="Endereco"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  required
                />
              </div>

              {/* NÚMERO DA CASA */}
              <div className="form-group">
                <label htmlFor="numero" />
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  placeholder="N°"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* USUÁRIO */}
            <div className="form-group">
              <label htmlFor="nickname" />
              <input
                type="text"
                id="nickname"
                name="nickname"
                placeholder="Usuária"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                required
              />
            </div>

            {/* SENHA */}
            <div className="form-group">
              <label htmlFor="password" />
              <div className="passwordInputWrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="passwordToggleIcon" onClick={handleToggleShowPassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            {/* CONFIRMAR SENHA */}
            <div className="form-group">
              <label htmlFor="confirmPassword" />
              <div className="passwordInputWrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirmar Senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                <div className="passwordToggleIcon" onClick={handleToggleShowPassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>

              </div>

              {isSubmitted && password !== confirmPassword && (
                <p className="error-message">As senhas não coincidem. Por favor, tente novamente.</p>
              )}
            </div>

            <div className='form-group-box'>
              <button className="btnCancel" type="button" onClick={handleCancel}>
                Cancelar
              </button>
              <button className="btnSubmit" type="submit">
                Cadastrar
              </button>
            </div>
          </form>

          {submitForm && (
            <UserPost
              userData={{
                nome,
                email,
                telefone,
                idade,
                cpf,
                cep,
                uf,
                cidade,
                endereco,
                numero,
                nickname,
                password,
              }}
              onSuccess={handleSuccess}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Cadastro
