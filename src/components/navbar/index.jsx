import React from 'react'
import Carrinho from '../CardWidget/carrinho'
import CarrinhoMantine from '../CardWidget/carrinho-mantine'
import altstore from '../../assets/altstore.png'
import { useState } from 'react';
import { Popover, Button } from '@mantine/core';


export default function NavBar() {


    function Car() {
        const [opened, setOpened] = useState(false);
        return (
            <Popover opened={opened} onChange={setOpened}>
                <Popover.Target>
                    <Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>
                </Popover.Target>

                <Popover.Dropdown>Dropdown</Popover.Dropdown>
            </Popover>
        );
    }

    return (
        <div className="navbar">
            <img src={altstore} width={150} style={{ borderRadius: 5 }} />

            <div className="links">
                <a href="#">Notebooks</a>
                <a href="#">Telefonia</a>
                <a href="#">Acessórios</a>
            </div>
            <div className="buttons">

                <Car></Car>

                {/* Componente feito com a lib Mantine */}
                <CarrinhoMantine></CarrinhoMantine>

                {/* Componente feito com useState */}
                <Carrinho></Carrinho>
            </div>
        </div>

    )

}