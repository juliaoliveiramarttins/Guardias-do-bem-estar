import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Formulario.css";

function Formulario() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({ 
        voluntaria: '',
        finsSociais: '',
        comprometimento: '',
        confidencialidade: '',
        terms: false
    })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        // If it's a checkbox, toggle its checked state
        const newValue = type === 'checkbox' ? checked : value
        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }))
    }

    const handleRadioChange = (event) => {
        const { name, value } = event.target
        // Update the formData only if the selected value is different from the current value
        if (formData[name] !== value) {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }))
        }
    }

    const redirectToConfirmacao = () => {
        if (!formData.terms || Object.values(formData).some(value => value === 'no' || value === 'Não')) {
            redirectToCadastro()
        } else {
            navigate("/confirmacao")
        }
    }

    const redirectToCadastro = () => {
        navigate("/cadastro", { state: { formData } })
    }

    return (

        <div className="questionary-page" >
            <div className="questionary-box" >
                <h1>Por favor, responda:</h1>
                <hr />

                <div>
                    <div className="questionary-selection" >
                        <p>Confirma ser uma voluntária?</p>
                        <form>
                            <input type="radio" id="voluntaria-yes" name="voluntaria" value="yes" onChange={handleRadioChange}/>
                            <label htmlFor="voluntaria-yes">Sim</label>
                            <input type="radio" id="voluntaria-no" name="voluntaria" value="no" onChange={handleRadioChange} />
                            <label htmlFor="voluntaria-no">Não</label>
                        </form>
                        <hr />
                    </div>

                    <div className="questionary-selection" >
                        <p>Entende que nosso aplicativo não possui fins financeiros, apenas sociais?</p>
                        <form>
                            <input type="radio" id="fins-sociais-yes" name="finsSociais" value="yes" onChange={handleRadioChange}/>
                            <label htmlFor="fins-sociais-yes">Sim</label>
                            <input type="radio" id="fins-sociais-no" name="finsSociais" value="no" onChange={handleRadioChange}/>
                            <label htmlFor="fins-sociais-no">Não</label>
                        </form>
                        <hr />
                    </div>

                    <div className="questionary-selection" >
                        <p>Você entende que ser voluntário é algo sério e precisa de comprometimento?</p>
                        <form>
                            <input type="radio" id="comprometimento-yes" name="comprometimento" value="yes" onChange={handleRadioChange}/>
                            <label htmlFor="comprometimento-yes">Sim</label>
                            <input type="radio" id="comprometimento-no" name="comprometimento" value="no" onChange={handleRadioChange}/>
                            <label htmlFor="comprometimento-no">Não</label>
                        </form>
                        <hr />
                    </div>

                    <div className="questionary-selection" >
                        <p>Você concorda em manter a confidencialidade das informações sensíveis ou pessoais que possam ser compartilhadas durante o trabalho voluntário?</p>
                        <form>
                            <input type="radio" id="confidencialidade-yes" name="confidencialidade" value="yes" onChange={handleRadioChange}/>
                            <label htmlFor="confidencialidade-yes">Sim</label>
                            <input type="radio" id="confidencialidade-no" name="confidencialidade" value="no" onChange={handleRadioChange}/>
                            <label htmlFor="confidencialidade-no">Não</label>
                        </form>
                        <hr />
                    </div>

                    <div className="questionary-selection" >
                        <form>
                            <input type="checkbox" id="terms" name="terms" value="terms" checked={formData.terms} onChange={handleChange}/>
                            <label htmlFor="terms">Eu li e concordo com os termos de segurança e privacidade.</label>
                        </form>

                        <button className="btnCancel" type="button" onClick={redirectToCadastro}>Cancelar </button>
                        <button className='btnSubmit' type="submit" onClick={redirectToConfirmacao}>Seguir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formulario
