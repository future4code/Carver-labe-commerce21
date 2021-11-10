import React from 'react'
import styled from 'styled-components'
import App from '../App'

const DivFiltro = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    min-width: 200px;
    height: 90vh;
    border: 2px solid black;
    padding: 10px;
`
const Input = styled.input`
    width: 200px;
`


export default function Filter(props) {
    return (
        <DivFiltro>
            <h2>Filtros</h2>
            <label>Valor mínimo:</label>
            <Input
                onChange={props.filtrarMinimo}
                type="number"
            />
            <label>Valor máximo:</label>
            <Input
                onChange={props.filtrarMaximo}
                type="number"
            />
            <label>Busca por nome:</label>
            <Input
                onChange={props.buscar}
                placeholder={"produto"}
                type="text"
            />
        </DivFiltro>
    )
}
