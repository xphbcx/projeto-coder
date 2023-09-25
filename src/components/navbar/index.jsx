import React from 'react'
import DropDown from '../ItemListContainer'
import Carrinho from '../CardWidget/carrinho'

export default function NavBar() {

    return (
        <div className="navbar">
            <div className="logo">AltStore</div>
            <DropDown></DropDown>
            <div className="links">
                <a href="#">Notebooks</a>
                <a href="#">Telefonia</a>
                <a href="#">Acessórios</a>
            </div>
            <div className="buttons">
                <button>Login</button>
                <Carrinho></Carrinho>
            </div>
        </div>

    )

}