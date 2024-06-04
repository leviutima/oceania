import Image from 'next/image'
import logo from '../assets/Logo-horizontal.png'
import style from '../Contato/Contato.module.css'
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'
import Footer from '../components/Footer/Footer'

const Contato = () => {
    return(
        <>
        <Header/>
            <section className={style.sectionContainer}>
                <div className={style.cardContato}>
                    <div className={style.titleContainer}>
                        <Image src={logo} width={400} alt='logo oceânica'/>
                        <div className={style.titleStyle}>
                            <h2>TEM DÚVIDAS?</h2>
                            <h2>FALE CONOSCO!</h2>
                        </div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14628.48545458755!2d-46.6523865!3d-23.5640843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dbf9ff57%3A0x4ca8eb5c4f7ecca9!2sFIAP%20-%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1717197497621!5m2!1spt-BR!2sbr" 
                        width="450" 
                        height="300" 
                        loading="lazy">
                        </iframe>
                        <span>ESTAMOS LOCALIZADOS NESSE ENDEREÇO</span>
                    </div>
                    <div className={style.container}>
                        <div className={style.containerInput}>
                            <label className={style.labelStyle}>NOME:</label>
                            <input className={style.inputStyle} type='text' placeholder='Digite seu nome...'></input>
                        </div>
                        <div className={style.containerInput}>
                            <label className={style.labelStyle}>EMAIL:</label>
                            <input className={style.inputStyle} type='email' placeholder='Digite seu email...'></input>
                        </div>
                        <div className={style.containerInput}>
                            <label className={style.labelStyle}>TELEFONE:</label>
                            <input className={style.inputStyle} type='tel' placeholder='Digite seu telefone...'></input>
                        </div>
                        <div className={style.containerInput}>
                            <label className={style.labelStyle}>DUVIDA:</label>
                            <input className={style.inputStyleQuestion} type='text' placeholder='Digite sua duvida...'></input>
                        </div>
                        <Button>ENVIAR</Button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contato