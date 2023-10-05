import { useState, useEffect } from 'react'
import '../../App.css'
import { Button, Text } from '@mantine/core'


function Contador() {


    const [count, setCount] = useState(1)
    const stock = 5

    function Add() {

        if (count < stock) {
            setCount(prevstate => prevstate + 1)
        } else {
            alert('Máximo de estoque')
        }
    }

    function Remove() {
        
        if (count > 1) {
            setCount(prevstate => prevstate - 1)
        } else {
            alert('Mínimo 1 item')
        }
    }


    return (

            <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                <div className='card-contador'>
                    <Button onClick={Remove}>
                        -
                    </Button>
                    <div style={{ marginInline: 70 }}>
                        {count}
                    </div>
                    <Button onClick={Add}>
                        +
                    </Button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                    <Button>Adicionar ao carrinho</Button>
                </div>
            </div>
        

    )
}

export default Contador;
