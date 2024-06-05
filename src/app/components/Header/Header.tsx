'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from '../../assets/Logo-vertical.png';
import style from '../Header/Header.module.css';
import Link from "next/link";
import Cart from "../Cart/Cart";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
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
                            <Link href='/Produtos' className={style.Link}>
                                <li className={style.menu}>Produtos</li>
                            </Link>
                            <Link href='/Sobre' className={style.Link}> 
                                <li className={style.menu}>Sobre</li>
                            </Link>
                            <Link href='/Contato' className={style.Link}>
                                <li className={style.menu}>Contato</li>
                            </Link>
                        </ul>
                    </div>
                    <div className={style.containerProfile}>
                        <Cart />
                        <Link href='/Login'className={style.LinkNoResponse}>
                        <span >Login</span>
                        </Link>
                    </div>
                    <div className={style.hamburger} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                <div className={`${style.navMenu} ${menuOpen ? style.open : ''}`}>
                    <Link href='/Produtos' className={`${style.Link} ${style.navItem}`}>
                        <span>Produtos</span>
                    </Link>
                    <Link href='/Sobre' className={`${style.Link} ${style.navItem}`}>
                        <span>Sobre</span>
                    </Link>
                    <Link href='/Contato' className={`${style.Link} ${style.navItem}`}>
                        <span>Contato</span>
                    </Link>
                    <Link href='/Login' className={`${style.Link} ${style.navItem}`}>
                        <span>Login</span>
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Header;
