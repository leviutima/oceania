import Image from "next/image"
import logo from '../../assets/Logo-vertical.png'
import style from '../Header/Header.module.css'
import { FaCartShopping } from "react-icons/fa6";


const Header = () => {
    return(
        <>
            <header>
                <nav className={style.container}>
                    <div>
                        <Image src={logo} alt="logo oceanica" width={180}/>
                    </div>
                    <div>
                        <ul className={style.containerLista}>
                            <li className={style.menu}>Produtos</li>
                            <li className={style.menu}>Sobre</li>
                            <li className={style.menu}>Contato</li>
                        </ul>
                    </div>
                    <div className={style.containerProfile}>
                        <FaCartShopping />
                        <span>Login</span>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header