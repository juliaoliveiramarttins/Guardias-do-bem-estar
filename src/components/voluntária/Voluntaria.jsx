import "./Voluntaria.css"

import voluntariaIcon from '../../assets/img/icones/voluntario/voluntaria.png'
import usuariaIcon from '../../assets/img/icones/voluntario/usuaria.png'


function Voluntaria() {


    return (
        <div className="volunteering">
            <div className="volunteering-description">
                <h1>Ei! Você pode fazer parte disso também!</h1>
                <h2>Se você é formada ou está prestes a se formar em advocacia, psicologia ou medicina, você pode se cadastrar como uma voluntária e ajudar a comunidade.</h2>
            </div>

            <div className="volunteering-cards">
                <div className="volunteering-cards-accepted" >
                    <img alt="Ícone de voluntária" src={voluntariaIcon} />
                    <a href="/formulario">Quero ser voluntária!</a>
                </div>

                <div className="volunteering-cards-rejected" >
                    <img alt="Ícone de usuária" src={usuariaIcon} />
                    <a href="/credit">Não quero ser voluntária</a>
                </div>
            </div>
        </div>
    )
}

export default Voluntaria
