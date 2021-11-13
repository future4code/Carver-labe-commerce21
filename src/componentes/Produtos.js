import React from "react"
import styled from "styled-components";
// import Carrinho from "./Carrinho";




const DivProdutos = styled.div`
    display: flex;
    flex-direction: column;
    
    img{
        width: 100%;
        height: 200px;

    }
    p{
        margin-left: 10px;
    }
    button{
        width: 50%;
        margin: auto;
        
    }
`

class Produtos extends React.Component {

    render() {
        return (
            <DivProdutos>
                <img src={this.props.imagemProduto} alt="foto do produto" />
                <p>{this.props.nomeProduto}</p>
                <p>R${this.props.valorProduto},00</p>
            </DivProdutos>
        );
    }
}
export default Produtos;

