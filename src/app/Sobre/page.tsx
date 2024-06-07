import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import style from '../Sobre/Sobre.module.css'
import JLV from '../assets/JLV.jpeg'
import Image from "next/image"
import Levi from '../assets/integrantes/levi 4.png'
import Joji from '../assets/integrantes/jhonatan 4.png'
import Vivian from '../assets/integrantes/vivian 4.png'

const Sobre = () => {
    return(
        <>  
            <Header/>
            <Banner img={JLV} titulo="SOBRE NÓS">Nós somos o time JLV, formados pelo acaso para resolver problemas. Começamos com a empresa Sales Force,
                e agora estamos dando um passo maior e procurando ajudar o meio ambiente utilizando a tecnologia. Estamos trabalhando para levantar um ecommerce, 
                visando diminuição de poluição nos oceanos. Sabemos que nos dias atuais esse é UM DOS maiores problemas ambientais e infelizmente não se tem a 
                atenção devida que deveria ter. Então a nossa ideia é vender produtos com materias reciclaveis vizando a diminuição de descarte dos mesmos, para 
                que não acabem indo diretamente para os oceanos como consequência.
            </Banner>
            <section className={style.containerTime}>
                <h2>CONHEÇA NOSSO TIME</h2>
                <div className={style.fotosContainer}>
                        <a href="#levi" className={style.linkSection}>
                            <div className={style.subContainerFotos}>
                                <Image src={Levi} alt="Uma foto do Levi" className={style.foto}/>
                                <span>SOBRE O LEVI</span>
                            </div>
                        </a>
                        <a href="#joji" className={style.linkSection}>
                            <div className={style.subContainerFotos}>
                                <Image src={Joji} alt="Uma foto do Jhonatan" className={style.foto}/>
                                <span>SOBRE O JHONATAN</span>
                            </div>
                        </a>
                        <a href="#vivian" className={style.linkSection}>
                            <div className={style.subContainerFotos}>
                                <Image src={Vivian} alt="Uma foto da Vivian" className={style.foto}/>
                                <span>SOBRE A VIVIAN</span>
                            </div>
                        </a>
                </div>
                <section id="vivian" className={style.vivian}>
                    <div>
                       <h2>Vivian</h2>
                        <p>Trabalhando por de baixo dos panos, Vivian é responsável pelas documentações da plataforma, visando a organização 
                            e padronização dos detalhes trabalhando também com a analises de dados da Ocêania.</p> 
                    </div>
                    <Image src={Vivian} alt="foto da vivian"/>
                </section>
                <section id="joji">
                        <h2>Jhonatan</h2>
                        <p>Trabalhando também por de baixo dos panos, Jhonatan é responsavel pelo back-end da plataforma, trabalhando com 
                        toda lógica de armazenamento de dados necessários para o funcionamento da plataforma.</p>
                </section>
                <section id="levi">Levi</section>
            </section>
        </>
    )
}

export default Sobre