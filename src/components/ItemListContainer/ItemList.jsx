import React, { useState, useEffect } from "react";
import '../../App.css'
import Contador from "../CardWidget/Contador";
import {Button} from '@mantine/core'

export default function ItemList() {

    const [items, setItems] = useState([]);
    const [showDetail, setShowDetail] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await fetch('/itemList.json');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Erro ao carregar os itens:', error);
            }
        }

        fetchItems();
    }, []);

    async function ProductDetails(item) {

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
        setSelectedItem(item);
        setShowDetail(true);
    }

    function hideDetail() {
        setShowDetail(false);
    }

    return (
        <div>
            <div className="card-item">
                {items.map((item) => (
                    <div style={{ backgroundColor: "#60a5a2", width: 240, borderRadius: 5 }} key={item.id}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img width={200} height={150} src={item.url_imagem} alt={item.nome} style={{ borderRadius: 5, marginTop: 15 }} />
                        </div>
                        <div style={{ marginLeft: 5 }}>
                            <p>{item.nome}</p>
                            {/* <p>Preço: R$ {item.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p> */}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 15, marginBottom: 15 }}>
                            <button onClick={() => ProductDetails(item)}>Detalhes do Produto</button>
                        </div>
                    </div>
                ))}
                {showDetail && (
                    <div style={{ backgroundColor: "#60a5a2", width: 240, borderRadius: 5 }}>
                        
                        <div style={{ marginLeft: 5 }}>
                            <p>{selectedItem.nome}</p>
                            <p>Preço: R$ {selectedItem.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 15, marginBottom: 15, flexDirection:'column' }}>
                            <Contador/>
                            <Button style={{width:'35%'}} onClick={hideDetail}>Fechar</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}