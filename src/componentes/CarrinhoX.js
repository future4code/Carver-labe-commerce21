import React from "react"
import styled from "styled-components"





const Container = styled.div`
  background-image:white;
  flex-wrap:nowrap;
`

const ListaProdutos = styled.p`
   
    background-image: white;
  
  
`

const BotaoExcluir = styled.button`
    width: 100px;
    margin-left: 10px;
    display: inline-block;
    align-content: flex-end;
    align-items:center;
    flex-shrink: 1;
    
`


export default class CarrinhoX extends React.Component{

  // excluirDoCarrinho = (e) => {
  //   const excluir = this.state.carrinho.filter((produto) => {
  //     return  produto.id !== e.target.value
  //   })
  //   this.setState({carrinho: excluir})
  //   console.log("sera?")
  // }

 
  render(){
    return(
      <Container>
                <ListaProdutos>
                    {this.props.quantidade}x {this.props.nomeProduto}: R${this.props.valorProduto * this.props.quantidade},00      
                </ListaProdutos>
                {/* <BotaoExcluir  onClick={this.props.excluir}>Remover</BotaoExcluir>                                                                           */}

           </Container>
    )
  }
}