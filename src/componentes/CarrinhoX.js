import React from "react"
import styled from "styled-components"



const Container = styled.div`
  background-image:white;
  flex-wrap:nowrap;
`

const ListaProdutos = styled.p`
    background-image: white;
`


export default class CarrinhoX extends React.Component{
 
  render(){
    return(
      <Container>
                <ListaProdutos>
                    {this.props.quantidade}x {this.props.nomeProduto}: R${this.props.valorProduto * this.props.quantidade},00      
                </ListaProdutos>
           </Container>
    )
  }
}