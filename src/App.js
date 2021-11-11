import React from 'react';
import Carrinho from "./componentes/Carrinho";
import styled from 'styled-components';
import Filtro from './componentes/Filtro';
import Produtos from './componentes/Produtos';

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

const DivListaProdutos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
`


class App extends React.Component {
  state = {
    valorMaximo: 1000,
    valorMinimo: 0,
    busca: "",
    ordem: "titulo",
    ordenacao: "",
    produtos: [
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
        valor: 200,
      },
      {
        id: 3,
        nome: "produto 3",
        imagem: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
        valor: 150,
      },
      {
        id: 4,
        nome: "produto 4",
        imagem: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
        valor: 300,
      },
      {
        id: 5,
        nome: "produto 5",
        imagem: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
        valor: 80,
      },
      {
        id: 6,
        nome: "produto 6",
        imagem: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
        valor: 50,
      },
    ]
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

  ordenarCards = (e) => {
    this.setState({
      ordem: e.target.value
    })
  }

  ordenacaoCards = (e) => {
    this.setState({
      ordenacao: e.target.value
    })
  }

  render() {
    let componentes = this.state.produtos
    .filter(produto => {
      return produto.nome.toLowerCase().includes(this.state.busca.toLowerCase())
    })
    .filter(produto => {
      return this.state.valorMinimo === "" || produto.valor >= this.state.valorMinimo
    })
    .filter(produto => {
      return this.state.valorMaximo === "" || produto.valor <= this.state.valorMaximo
    })
    .sort((produto,produto2) => {
      switch (this.state.ordem){
        case "titulo":
          return this.state.ordenacao * produto.nome.localeCompare(produto2.nome)
        default:
          return this.state.ordenacao * (produto.valor - produto2.valor)
    }
    })
    .map((produto) => {
      return (
        <Produtos
          key={produto.id}
          nomeProduto={produto.nome}
          imagemProduto={produto.imagem}
          valorProduto={produto.valor}
        />
      )
    })
    return (
      <MainContainer>
        <Filtro
          filtrarMinimo={this.onChangeValorMin}
          filtrarMaximo={this.onChangeValorMax}
          buscar={this.onChangeBuscar}
          valueBusca={this.state.busca}
          valueValorMax={this.state.valorMaximo}
          valueValorMin={this.state.valorMinimo}
        />
        <DivTeste1>
          <span>
            <h1>produtos</h1>
            <label for="ordem">Ordenação:</label>
            <select 
              name="ordem"
              value={this.state.ordem}
              onChange={this.ordenarCards}
            >
              <option value="titulo">Título</option>
              <option value="preco">Preço</option>
            </select>
          </span>
          <select 
              name="ordem"
              value={this.state.ordenacao}
              onChange={this.ordenacaoCards}
            >
              <option value={1}>Crescente</option>
              <option value={-1}>Decrescente</option>
            </select>
          <DivListaProdutos>
          {componentes}
          </DivListaProdutos>
        </DivTeste1>
        <DivTeste2>
          <h1>carrinho</h1>
          <Carrinho/>
        </DivTeste2>
      </MainContainer>
    );
  }
}
export default App;
