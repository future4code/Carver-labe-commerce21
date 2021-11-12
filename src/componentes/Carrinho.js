
import React from "react"

export default class Carrinho extends React.Component{
  state = {
    quantidade: 0,
    total: 0,
  }
  

  onClickAdicionar1 = () =>{
    this.setState({quantidade:this.state.quantidade +1})
    let num = this.state.total+400
    this.setState({total: num})
    console.log("coisou")
  }
  
  onClickAdicionar2 = () =>{
    this.setState({quantidade:this.state.quantidade +1})
    let num = this.state.total+600
    this.setState({total: num})
  }

  onClickAdicionar3 = () =>{
    this.setState({quantidade:this.state.quantidade +1})
    let num = this.state.total+950
    this.setState({total: num})
  }

  onClickLimpar = () => {
    this.setState({total:0})
    this.setState({quantidade:0})
    
  }

  


  render(){
    return(
      <main>
         
        <div>
            <p>Capacete Espacial R$400,00 </p>
            <button onClick = {this.onClickAdicionar1}>Adicionar ao carrinho</button>
        </div> 
        <div>
            <p>Traje pra andar na Lua R$600,00</p>
            <button onClick = {this.onClickAdicionar2}>Adicionar ao carrinho</button>

        </div>    
        <div>
            <p>Arma Laser R$950,00</p>
            <button onClick = {this.onClickAdicionar3}>Adicionar ao carrinho</button>
        </div>    
            <button onClick = {this.onClickLimpar}>Limpar Carrinho</button>
            <h1> Total de itens: {this.state.quantidade}</h1>
            <h1>Total: {this.state.total}</h1>
      </main>


    )
  }
}