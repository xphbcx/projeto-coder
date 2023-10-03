import React from 'react'
import '../../App.css'

export default function ItensCarrinho(props) {

    return (

        <div className='carrinho'>
            <h3>Itens do Carrinho</h3>
            <p>Produto: {props.product}</p>
            <p>Preço: {props.price}</p>
            <img width={50} src={props.imgProduct} />
        </div>

    )
}