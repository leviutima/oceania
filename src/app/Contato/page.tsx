import Image from 'next/image'
import logo from '../assets/Logo-horizontal.png'
import style from '../Contato/Contato.module.css'
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'

const Contato = () => {
    return(
        <>
        <Header/>
            <section className={style.sectionContainer}>
                <div className={style.cardContato}>
                    <div>
                        <Image src={logo} width={400} alt='logo oceânica'/>
                        <h2>TEM DÚVIDAS?</h2>
                        <h2>FALE CONOSCO!</h2>
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
                            <input className={style.inputStyleQuestion} type='text'></input>
                        </div>
                        <Button>ENVIAR</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contato