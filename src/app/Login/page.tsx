import Link from "next/link"
import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import style from '../Login/Login.module.css'

const Login = () => {
    return(
        <>
        <Header/>
        <section className={style.sectionContainer}>
            <div className={style.container}>
                <div className={style.cardLogin}>
                    <h2>INICIE SESSÃO</h2>
                    <div className={style.containerForm}>
                        <label className={style.labelStyle}>EMAIL:</label>
                        <input className={style.inputStyle} type="email" placeholder="Digite seu email..."></input>
                    </div >
                    <div className={style.containerForm}>
                        <label className={style.labelStyle}>SENHA:</label>
                        <input className={style.inputStyle} type="password" placeholder="Digite sua senha..."></input>
                    </div>
                    <Button>ENVIAR</Button>
                </div>
                <div className={style.containerSpan}>
                    <span className={style.spanStyle}>Ainda não tem cadastro?</span> <span>Clique <Link href='/Cadastro'>AQUI</Link> para criar uma conta</span>
                </div>
            </div>
        </section>

        </>
    )
}

export default Login