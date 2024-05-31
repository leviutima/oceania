import Image from "next/image"
import logo from '../../assets/Logo-vertical.png'
import style from '../Header/Header.module.css'
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";


const Header = () => {
    return(
        <>
            <header className={style.cabecalho}>
                <nav className={style.container}>
                    <div>
                        <Link href='/Home'>
                            <Image src={logo} alt="logo oceanica" width={180}/>
                        </Link>
                    </div>
                    <div>
                        <ul className={style.containerLista}>
                            <Link href='*' className={style.Link}>
                                <li className={style.menu}>Produtos</li>
                            </Link>
                            <Link href='*' className={style.Link}> 
                                <li className={style.menu}>Sobre</li>
                            </Link>
                            <Link href='/Contato' className={style.Link}>
                                <li className={style.menu}>Contato</li>
                            </Link>
                        </ul>
                    </div>
                    <div className={style.containerProfile}>
                        <FaCartShopping />
                        <Link href='/Login' className={style.Link}>
                            <span>Login</span>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header