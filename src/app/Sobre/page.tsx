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
                    <div className={style.containerVivian}>
                        <div >
                        <h2>Vivian</h2>
                            <p>Trabalhando por de baixo dos panos, Vivian é responsável pelas documentações da plataforma, visando a organização 
                                e padronização dos detalhes trabalhando também com a analises de dados da Ocêania. Formada em Audiovisual pelo Senac, 
                                trabalhou por 4 anos com edição de vídeo e animação, mas sempre se interessou muito por tecnologia e tentava se manter 
                                atualizada nas notícias dessa área. Em 2020, conseguiu um emprego em uma multinacional, onde trabalhou na área de infraestrutura 
                                de TI e teve contato com desenvolvedores de software, o que despertou seu interesse, e em 2023 decidiu finalmente se matricular 
                                na FIAP, no curso de Análise e Desenvolvimento de Sistemas, que nos trouxe até este momento.
                                </p>
                        </div>
                            <Image src={Vivian} alt="foto da vivian" width={300}/>
                    </div>
                </section>
                <section id="joji" className={style.joji}>
                    <div className={style.containerJoji}>
                        <Image src={Joji} alt="foto do Jhonatan" width={300}/>
                        <div className={style.textJoji}>
                            <h2>Jhonatan</h2>
                            <p>Trabalhando também por de baixo dos panos, Jhonatan é responsavel pelo back-end da plataforma, trabalhando com 
                            toda lógica de armazenamento de dados necessários para o funcionamento da plataforma. Estudante do segundo semestre 
                            de Análise e Desenvolvimento de Sistemas. Proficiente em backend e banco de dados. Como hobby, gosta de estudar, jogar 
                            videogame e fotografar. Atualmente, está fissurado no aprendizado de VBA</p>
                        </div>
                    </div>
                </section>
                <section id="levi" className={style.levi}>
                    <div className={style.containerLevi}>
                        <div className={style.textLevi}>
                            <h2>Levi</h2>
                            <p>Trabalhando na parte visual, Levi ficou responsável pela parte da criação do site da oceânia, trabalhando com UX e 
                            integração do back-end com o front-end. Levi é um estudante de Análise e Desenvolvimento de Sistemas na Faculdade FIAP.
                            No momento está voltado mais ao front-end para se especializar, mas é apaixonado pelo back-end. Nos momentos livres gosta de jogar,
                            fazer exercícios físicos e assistir um bom filme.</p>
                        </div>
                        <Image src={Levi} alt="Uma foto do levi" width={300}/>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Sobre