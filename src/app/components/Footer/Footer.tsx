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
                    <Link href='*' className={style.linkStyle}>
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
        </footer>
    );
}

export default Footer;
