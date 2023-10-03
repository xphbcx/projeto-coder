import { useState, useEffect } from 'react'
import '../../App.css'
import { Button, Text } from '@mantine/core'
import nitro5 from '../../assets/nitro5.png'
import Contador from './Contador'


function Item(props) {

    return (

        <div className='card-container'>
            <div className='card-item'>
                <div>
                    <img width={200} src={nitro5} style={{ marginTop: 10, borderRadius: 10 }} />
                    <Text>Acer Nitro 5 15" 512 GB </Text>
                    <Text>Preço: R$ 4.000,00</Text>
                </div>
                <Contador stock={stock}/>
            </div>
        </div>

    )
}

export default Item
