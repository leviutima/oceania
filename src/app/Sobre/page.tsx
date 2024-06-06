'use client'
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import style from '../Sobre/Sobre.module.css';
import JLV from '../assets/JLV.jpeg';
import Levi from '../assets/integrantes/levi 4.png';
import Joji from '../assets/integrantes/jhonatan 4.png';
import Vivian from '../assets/integrantes/vivian 4.png';
import Image from 'next/image';

const Sobre = () => {
    const [currentSlide, setCurrentSlide] = useState(0); 


    const teamMembers = [
        { id: 'levi', name: 'Levi', imgSrc: Levi, description: 'SOBRE O LEVI' },
        { id: 'jhonatan', name: 'Jhonatan', imgSrc: Joji, description: 'SOBRE O JHONATAN' },
        { id: 'vivian', name: 'Vivian', imgSrc: Vivian, description: 'SOBRE A VIVIAN' },
    ];


    const nextSlide = () => {
        setCurrentSlide(currentSlide === teamMembers.length - 1 ? 0 : currentSlide + 1);
    };


    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? teamMembers.length - 1 : currentSlide - 1);
    };

    return (
        <>
            <Header />
            <Banner img={JLV} titulo="SOBRE NÓS">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Banner>
            <section className={style.containerTime}>
                <h2>CONHEÇA NOSSO TIME</h2>
                <div className={style.sliderContainer}>
                    <div className={style.slide} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {teamMembers.map((member) => (
                            <div key={member.id} className={style.subContainerFotos}>
                                <Image src={member.imgSrc} alt={`Uma foto de ${member.name}`} className={style.foto} />
                                <span>{member.description}</span>
                            </div>
                        ))}
                    </div>
                    <button className={style.prevButton} onClick={prevSlide}>
                        &#10094;
                    </button>
                    <button className={style.nextButton} onClick={nextSlide}>
                        &#10095;
                    </button>
                </div>
            </section>
        </>
    );
};

export default Sobre;
