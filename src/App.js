import React from 'react';
import Carrinho from "./componentes/Carrinho";
import styled from 'styled-components';
import Filtro from './componentes/Filtro';
import Produtos from './componentes/Produtos';
import CarrinhoX from './componentes/CarrinhoX';

const MainContainer = styled.div`
  display: flex;
  padding: 15px;
`
const DivProdutos = styled.div`
  border: 1px solid black;
  span{
    display: flex;
  }
  button{
        width: 50%;
        margin: auto;
    }
`

const DivCards = styled.div`
  border: 2px solid black;
  width: 50vw;
  margin: 0 5px;
  
`

const DivCarrinho = styled.div`
  border: 2px solid black;
  width: 25vw;
  h2{
    text-align: center;
  }
  p{
    text-align: right;
    margin-right: 20px;
    font-size: 20px;
  }
`

const DivListaProdutos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
`

const ParteOrdenacao = styled.div`
  display: flex;
 justify-content: space-between;
`

const DivCarrinhoCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  button{
    height: 50%;
    
  }
`


class App extends React.Component {
  state = {
    valorMaximo: 1000,
    valorMinimo: 0,
    busca: "",
    ordem: "titulo",
    ordenacao: "",
    carrinho: [],
    produtos: [
      {
        id: 1,
        nome: "Roupa de Astronauta",
        imagem: "https://img.r7.com/images/astronauta-16102019104753764",
        valor: 100,
      },
      {
        id: 2,
        nome: "Arma Laser",
        imagem: "https://rockntech.com.br/wp-content/uploads/2013/07/armas-lasers_2.jpg",
        valor: 200,
      },
      {
        id: 3,
        nome: " Capacete de astronauta",
        imagem: "https://f.i.uol.com.br/fotografia/2021/08/24/16298397126125616054d37_1629839712_3x2_md.jpg",
        valor: 150,
      },
      {
        id: 4,
        nome: "Camisa Nasa",
        imagem: "https://images.tcdn.com.br/img/img_prod/680735/camiseta_nasa_361_1_20200802125507.jpg",
        valor: 300,
      },
      {
        id: 5,
        nome: "Milleniun Falcon",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_764593-MLB42659033697_072020-O.jpg",
        valor: 80,
      },
      {
        id: 6,
        nome: "Sabre de luz",
        imagem: "https://funtasylands.com/wp-content/uploads/2016/09/sabre-de-luz-ahsoka-tano-star-wars.jpg",
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

  adicionarCarrinho = (e) => {
    let produtoSelecionado = this.state.produtos.filter((produto) => {
      return produto.id == e.target.value
    })
    let controle = 0;
    let carrinhoCarregado = this.state.carrinho.map((itemCarrinho) => {
      if (itemCarrinho.produto.id == e.target.value) {
        itemCarrinho.quantidade++
        controle++
      }
      return itemCarrinho
    })

    if (controle == 0) {
      this.setState({
        carrinho: [...this.state.carrinho, {
          quantidade: 1,
          produto: produtoSelecionado[0]
        }]
      }, () => console.log(this.state.carrinho))
    } else {
      this.setState({
        carrinho: carrinhoCarregado
      }, () => console.log(this.state.carrinho))
    }
  };

  excluirDoCarrinho = (e) => {
    let controle = 0
    const novoCarrinho = this.state.carrinho.map((produto) => {
      if (produto.produto.id == e.target.value) {
        if (produto.quantidade > 1) {
          produto.quantidade--
          controle++
        }
      }
      return produto
    })
    console.log("NovoCarrinho", novoCarrinho)
    if (controle == 0) {
      const excluir = this.state.carrinho.filter((produto) => {
        return produto.produto.id !== Number(e.target.value)
      })
      this.setState({ carrinho: excluir })
    }else{
      this.setState({carrinho: novoCarrinho})
    }

    
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
      .sort((produto, produto2) => {
        switch (this.state.ordem) {
          case "titulo":
            return this.state.ordenacao * produto.nome.localeCompare(produto2.nome)
          default:
            return this.state.ordenacao * (produto.valor - produto2.valor)
        }
      })
      .map((produto) => {
        // console.log(produto.id)
        return (
          <DivProdutos>
            <Produtos
              key={produto.id}
              nomeProduto={produto.nome}
              imagemProduto={produto.imagem}
              valorProduto={produto.valor}
            />
            <span>
              <button value={produto.id} onClick={this.adicionarCarrinho}>Adicionar ao carrinho</button>
            </span>
          </DivProdutos>
        )
      })


    const listaCarrinho = this.state.carrinho.map((produtoNoCarrinho) => {
      console.log(produtoNoCarrinho)
      return (
        <DivCarrinhoCards>
          <CarrinhoX
            nomeProduto={produtoNoCarrinho.produto.nome}
            valorProduto={produtoNoCarrinho.produto.valor}
            quantidade={produtoNoCarrinho.quantidade}    
          />
          <button value={produtoNoCarrinho.produto.id} onClick={this.excluirDoCarrinho}>Remover</button>
        </DivCarrinhoCards>
      );
    });


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
        <DivCards>
          <p>Quantidade de produtos: {componentes.length}</p>
          <ParteOrdenacao>
            <span>
              <label for="ordem">Ordenação: </label>
              <select
                name="ordem"
                value={this.state.ordem}
                onChange={this.ordenarCards}
              >
                <option value="titulo">Título</option>
                <option value="preco">Preço</option>
              </select>
            </span>
            <span>
              <select
                name="ordem"
                value={this.state.ordenacao}
                onChange={this.ordenacaoCards}
              >
                <option value={1}>Crescente</option>
                <option value={-1}>Decrescente</option>
              </select>
            </span>
          </ParteOrdenacao>
          <DivListaProdutos>
            {componentes}
          </DivListaProdutos>
        </DivCards>
        <DivCarrinho>
          <h2>Carrinho</h2>
          {listaCarrinho}
          <p>
            Total: {" "}
            R${this.state.carrinho.reduce(
              (acumulador, objeto) =>
                acumulador + objeto.quantidade * objeto.produto.valor,
              0
            )},00
          </p>
        </DivCarrinho>
      </MainContainer>
    );
  }
}
export default App;
