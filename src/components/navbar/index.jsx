import React from 'react'
import Carrinho from '../CardWidget/Carrinho'
import CarrinhoMantine from '../CardWidget/CarrinhoMantine'
import altstore from '../../assets/altstore.png'


export default function NavBar() {


    return (
        <div className="navbar">
            <img src={altstore} width={150} style={{ borderRadius: 5 }} />

            <div className="links">
                <a href="#">Notebooks</a>
                <a href="#">Telefonia</a>
                <a href="#">Acessórios</a>
            </div>
            <div className="buttons">

                {/* Componente feito com a lib Mantine */}
                <CarrinhoMantine></CarrinhoMantine>

                {/* Componente feito com useState */}
                <Carrinho></Carrinho>
            </div>
        </div>

    )

}