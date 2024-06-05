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
            <Banner img={JLV} titulo="SOBRE NÓS">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when 
            an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.</Banner>
            <section className={style.containerTime}>
                <h2>CONHEÇA NOSSO TIME</h2>
                <div className={style.fotosContainer}>
                    <a href="#levi">
                        <div className={style.subContainerFotos}>
                            <Image src={Levi} alt="Uma foto do Levi" className={style.foto}/>
                            <span>SOBRE O LEVI</span>
                        </div>
                    </a>
                    <a href="#jhonatan">
                        <div className={style.subContainerFotos}>
                            <Image src={Joji} alt="Uma foto do Jhonatan" className={style.foto}/>
                            <span>SOBRE O JHONATAN</span>
                        </div>
                    </a>
                    <a href="#vivian">
                        <div className={style.subContainerFotos}>
                            <Image src={Vivian} alt="Uma foto da Vivian" className={style.foto}/>
                            <span>SOBRE A VIVIAN</span>
                        </div>
                    </a>
                </div>
                <section id="vivian" className={style.vivian}>
                    <h1>Vivian</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when 
                    an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                    Aldus PageMaker including versions of Lorem Ipsum.</p>
                </section>
                <section id="jhonatan">Jhonatan</section>
                <section id="levi">Levi</section>
            </section>
        </>
    )
}

export default Sobre