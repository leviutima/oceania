import Image from 'next/image';
import style from '../Footer/Footer.module.css';
import logo from '../../../../public/C-Baleia.png';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={style.footerStyle}>
            <div className={style.firstContainer}>
                <Image src={logo} alt='Logo da Oceânia' width={60} />
                <div className={style.columStyle}>
                    <span>QUEM SOMOS</span>
                    <Link href='/Sobre' className={style.linkStyle}>
                        <p>sobre nós</p>
                    </Link>
                </div>
                <div className={style.columStyle}>
                    <span>NOSSOS PRODUTOS</span>
                    <Link href='/Produtos' className={style.linkStyle}>
                        <p>produtos</p>
                    </Link>
                </div>
                <div className={style.columStyle}>
                    <span>FALE CONOSCO</span>
                    <Link href='/Contato' className={style.linkStyle}>
                        <p>contate-nos</p>
                    </Link>
                </div>
            </div>
            <div className={style.secontContainer}>
                <div className={style.integrantes}>
                    <span>Levi Yuki Utima / RM: 553580</span>
                </div>
                <div className={style.integrantes}>
                    <span>Vivian Sy Ting Wu / RM: 553169</span>
                </div>
                <div className={style.integrantes}>
                    <span>Jhonatan Sampaio Ferreira / RM: 553791</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
