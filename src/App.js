import React from "react";
import styled from "styled-components";
import BannerMain from './Components/BannerMain';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Menu from "./Components/Menu";
import dados_iniciais from './assets/src/data/dados_iniciais.json'

const AppWrapper = styled.div`
  background: #141414

  padding-top: 94px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function App() {
  return(
    <AppWrapper>
      {/*Uso do component Menu como função*/}
      <Menu />

      <BannerMain
      videoTitle={dados_iniciais.categorias[0].videos[0].titulo}
      url={dados_iniciais.categorias[0].videos[0].url}
      videoDescription={"Teste"}
      />

      <Carousel 
      ignoreFirstVideo
      category={dados_iniciais.categorias[0]}
      />

      <Carousel 
      ignoreFirstVideo
      category={dados_iniciais.categorias[1]}
      />

      <Footer></Footer>
    </AppWrapper>
  )
}

export default App;