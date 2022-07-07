import React from "react";
import './Components/Menu/Menu.css'
import BannerMain from './Components/BannerMain';
import { BannerMainContainer } from "./Components/BannerMain/styles";
import ButtonLink from './Components/ButtonLink'
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Menu from "./Components/Menu";
import dados_iniciais from './assets/src/data/dados_iniciais.json'

function App() {
  return(
    <div>
      {/*Uso do component Menu como função*/}
      <Menu />

      <BannerMain
      videoTitle={dados_iniciais.categorias[0].videos[0].titulo}
      url={dados_iniciais.categorias[0].videos[0].url}
      videoDescription={"Teste"}
      />

      <BannerMain
      videoTitle={dados_iniciais.categorias[0].videos[0].titulo}
      url={dados_iniciais.categorias[0].videos[0].url}
      videoDescription={"Teste"}
      />
    </div>
  )
}

export default App;