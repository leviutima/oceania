import Header from "../components/Header/Header"
import style from '../Cadastro/Cadastro.module.css'
import Button from "../components/Button/Button"
import Image from "next/image"
import logo from '../../../public/C-Baleia.png'

const Cadastro = () => {
    return(
        <>
            <Header/>
            <section className={style.containerSection}>
                <div className={style.cardCadastro}>
                    <div className={style.blueSection}>
                        <div className={style.containerTitle}>
                            <h2>SEJA BEM VINDO!</h2>
                            <Image src={logo} width={150}/>
                        </div>
                    </div>
                    <div className={style.form}>
                        <h2 className={style.titleForm}>CRIAR CONTA</h2>
                        <div className={style.containerForm}>
                            <div className={style.inputContainer}>
                                <label>NOME:</label>
                                <input className={style.inputCadastro} type="text" placeholder="Digite seu nome..."></input>
                            </div>
                            <div className={style.inputContainer}>
                                <label>CPF:</label>
                                <input className={style.inputCadastro} type="text" placeholder="Digite seu cpf..."></input>
                            </div>
                            <div className={style.inputContainer}>
                                <label>EMAIL:</label>
                                <input className={style.inputCadastro} type="email" placeholder="Digite seu email..."></input>
                            </div>
                            <div className={style.inputContainer}>
                                <label>SENHA:</label>
                                <input className={style.inputCadastro} type="password" placeholder="Digite sua senha..."></input>
                            </div>
                            <div className={style.inputContainer}>
                                <label>DATA DE NASCIMENTO:</label>
                                <input className={style.inputCadastro} type="date"></input>
                            </div>
                        </div>
                        <Button>CRIAR</Button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Cadastro