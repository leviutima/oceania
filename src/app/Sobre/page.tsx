import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import JLV from '../assets/JLV.jpeg'
import Footer from "../components/Footer/Footer"

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
        </>
    )
}

export default Sobre