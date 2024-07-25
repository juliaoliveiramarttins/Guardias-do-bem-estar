import './PreLoading.css'
import Logo from '../../assets/img/logo/Escudo.png'

const PreLoading = () => {
    return (
        <div className="loading-box">
            <div className="loading">
                <img className="logo" src= {Logo} alt="Logo" />
            </div>
        </div>
    )
}

export default PreLoading
