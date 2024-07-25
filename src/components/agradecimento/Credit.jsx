import "./Credit.css"
import { useNavigate } from "react-router-dom"
import creditIcon from '../../assets/img/icones/voluntario/creditIcon.png'

function Credit () {
    const navigate = useNavigate()

    const handleContinue = () => {
        navigate("/homepage")
    }


    return (
        <div className="credit-success">
            <p>Agora você faz parte da nossa comunidade!</p>
            <h1>BEM VINDA!</h1>
            <img alt="Credit Icon" src={creditIcon} />
            <button type="button" onClick={handleContinue}>Pronta?!</button>
        </div>
    )
}

export default Credit
