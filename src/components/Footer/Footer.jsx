import { FaInstagram } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = () => {
    const urlIg = 'https://www.instagram.com/';
    const urlFc = 'https://www.facebook.com/';
    const urlTw = 'https://twitter.com/';


    return (
        <footer className="text-center">
            <hr />
            <div className='footerText'>
                <ul className='iconos'>
                    <li>
                        <Link to={urlIg} >
                            <FaInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link to={urlFc}>
                            <BsFacebook />
                        </Link>
                    </li>
                    <li>
                        <Link to={urlTw}>
                            <BsTwitter />
                        </Link>
                    </li>
                </ul>
                <h4> © Todos los derechos reservados | 2023 </h4>
                <h4> Santiago del Estero </h4>
            </div>

        </footer>
    )
}

export default Footer