import React from 'react'
import DropDown from '../ItemListContainer'
import Carrinho from '../CardWidget/carrinho'
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';


export default function NavBar() {

    function Demo() {
        const [opened, { open, close }] = useDisclosure(false);
      
        return (
          <>
            <Drawer opened={opened} onClose={close} title="Authentication">
              <h1>TESTE</h1>
            </Drawer>
      
            <Button onClick={open}>Open Drawer</Button>
          </>
        );
      }
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
                <Demo></Demo>
            </div>
        </div>

    )

}