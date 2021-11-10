// EXERCICIO CARTÃO DE CRÉDITO MOE

import React from "react"

export default class Carrinho extends React.Component{
  state = {
    quantidade: 1
  }

  onClickAdicionar = () =>{
    const atual = this.state.quantidade
    const novo = {quantidade: atual +1}
    this.setState(novo)
    console.log("Quantidade do carrinho", this.state.quantidade)

  }
  onClickLimpar = () => {
    const atual = this.state.quantidade
    const novo = {quantidade: atual - atual}
    this.setState(novo)
    console.log("limpando carrinho:", this.state.quantidade )
  }


  render(){
    return(
      <main>
        <div>
            
            <button onClick = {this.onClickAdicionar}>Adicionar ao carrinho</button>
        </div>    
        <div>
            
            <button onClick = {this.onClickAdicionar}>Adicionar ao carrinho</button>
        </div>    
        <div>
            
            <button onClick = {this.onClickAdicionar}>Adicionar ao carrinho</button>
        </div>    
            

            <button onClick = {this.onClickLimpar}>Limpar Carrinho</button>
      </main>


    )
  }
}