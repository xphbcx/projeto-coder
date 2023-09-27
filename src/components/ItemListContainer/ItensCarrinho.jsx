import React from 'react'
import '../../App.css'
import nitro5 from '../../assets/nitro5.png'

export default function ItensCarrinho(props) {

    return (

        <div className='carrinho'>
            <h3>Itens do Carrinho</h3>
            <p>Produto: {props.product}</p>
            <p>Preço: {props.price}</p>
            <img src={props.imgProduct} />
            {/* <img width='50px' src={nitro5} /> */}
        </div>

    )
}