import Image from "next/image"
import lixos from '../../assets/lixos.jpg'
import React from "react"
import style from '../Banner/Banner.module.css'

interface Props {
    children: React.ReactNode
    titulo: string
}

const Banner = ({ titulo, children}: Props) => {
    return(
        <>
            <section className={style.sectionContainer}>
                <div>
                    <h1 className={style.title}>{titulo}</h1>
                    <p className={style.paragraph}>{children}</p>
                </div>
                <div>
                    <Image src={lixos} width={700} alt="imagem piloto" priority={true}/>
                </div>
            </section>
        </>
    )
}

export default Banner