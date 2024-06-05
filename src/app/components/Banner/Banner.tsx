import Image, { StaticImageData } from "next/image";
import React from "react";
import style from '../Banner/Banner.module.css';

interface Props {
    children: React.ReactNode;
    titulo: string;
    img: StaticImageData;
}

const Banner = ({ titulo, children, img}: Props) => {
    return(
        <>
            <section className={style.sectionContainer}>
                <div>
                    <h1 className={style.title}>{titulo}</h1>
                    <p className={style.paragraph}>{children}</p>
                </div>
                <div>
                    <Image src={img} width={700} alt="imagem piloto" priority={true} className={style.imgBanner}/>
                </div>
            </section>
        </>
    );
}

export default Banner;
