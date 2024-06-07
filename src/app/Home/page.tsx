import lixos from '../assets/lixos.jpg'
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from '../components/Footer/Footer';


export default function Home() {
  return (
    <>
    <Banner titulo="TITULO" img={lixos}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when 
      an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
      sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
      Aldus PageMaker including versions of Lorem Ipsum.</Banner>
    <section>
      <h1>
        PRODUTOS EM DESTAQUE
      </h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when 
      an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
      sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
      Aldus PageMaker including versions of Lorem Ipsum.</p>
    </section>
    <section>

    </section>
    </>
  );
}
