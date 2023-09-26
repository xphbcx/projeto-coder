
import React, {useState} from 'react';
import { Popover, Text, Button } from '@mantine/core';

export default function CarrinhoMantine() {


    
    return (
        <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
                
                <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icons">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </Button>
            </Popover.Target>
            <Popover.Dropdown
                style={{
                    justifyContent: 'center',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "absolute",
                    width: 200,
                    border: 1,
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: '#60a5a2',
                    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                    top: 90,
                    color: 'white'
                }}>
                <Text size="xs">Itens do Carrinho irão aparecer aqui</Text>
            </Popover.Dropdown>
        </Popover>
    );
}