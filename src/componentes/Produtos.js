import React from "react"
import styled from "styled-components";


const DivProdutos = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    img{
        width: 100%;
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
                <button>Adicionar ao carrinho</button>
            </DivProdutos>
        );
    }
}
export default Produtos;

