import React from 'react';
import styled from 'styled-components';
import Filter from './componentes/Filter';

const MainContainer = styled.div`
  display: flex;
  padding: 15px;
`

const DivTeste1 = styled.div`
  border: 2px solid black;
  width: 50vw;
  margin: 0 5px;
`

const DivTeste2 = styled.div`
  border: 2px solid black;
  width: 25vw;
`

const cardsProdutos = [
  {
    id: 1,
    nome: "produto 1",
    imagem: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    valor: 100,
  },
  {
    id: 2,
    nome: "produto 2",
    imagem: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    valor: 100,
  },
  {
    id: 3,
    nome: "produto 3",
    imagem: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    valor: 100,
  },
  {
    id: 4,
    nome: "produto 4",
    imagem: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    valor: 100,
  },
  {
    id: 5,
    nome: "produto 5",
    imagem: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    valor: 100,
  },
  {
    id: 6,
    nome: "produto 6",
    imagem: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    valor: 100,
  },
]



class App extends React.Component {
  state = {
    valorMaximo: 1000,
    valorMinimo: 0,
    busca: "",
  }


  onChangeValorMin = (e) => {
    this.setState({ valorMinimo: e.target.value })
    console.log("Valor mínimo:", this.state.valorMinimo)
  }

  onChangeValorMax = (e) => {
    this.setState({ valorMaximo: e.target.value })
    console.log("Valor mínimo:", this.state.valorMaximo)
  }

  onChangeBuscar = (e) => {
    this.setState({ busca: e.target.value })
    console.log("Buscando:", this.state.busca)
  }

  render() {

    return (
      <MainContainer>
        <Filter
          filtrarMinimo={this.onChangeValorMin}
          filtrarMaximo={this.onChangeValorMax}
          buscar={this.onChangeBuscar}
        />
        <DivTeste1>
          <h1>produto</h1>
          
        </DivTeste1>
        <DivTeste2><h1>carrinho</h1></DivTeste2>
      </MainContainer>
    );
  }
}
export default App;
