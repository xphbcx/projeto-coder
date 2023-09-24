import React from 'react'

export default function NavBar() {

    return (
        <div className="navbar">
            <div className="logo">AltStore</div>
            <div className="links">
                <a href="#">Notebooks</a>
                <a href="#">Telefonia</a>
                <a href="#">Acessórios</a>
            </div>
            <div className="buttons">
                <button>Login</button>
            </div>
        </div>

    )

}