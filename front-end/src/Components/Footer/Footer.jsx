import './Footer.css'
import Logo from '../../../public/logo-token-white.svg'

export function Footer() {
    return(
        <>
        <footer className='container-footer'>
            <img className="logo" src={Logo} alt="logo" />
            <div className='text-footer'>
                <h2>Para o sucesso de seu negócio, conte com as soluções Tokenlab</h2>
            </div>
            
            <hr />

            <div className="data-footer">
                    <span>@ 2024 Token Lab</span>
                </div>
        </footer>
        </>
    );

}