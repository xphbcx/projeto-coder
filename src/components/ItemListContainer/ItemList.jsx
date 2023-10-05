import React, { useState, useEffect } from "react";
import '../../App.css'
import Contador from "../CardWidget/Contador";

export default function ItemList() {
    const [items, setItems] = useState([]);

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

    return (
        <div>
            <div className="card-item">
                {items.map((item) => (
                    <div style={{ backgroundColor: "#60a5a2", width: 240, borderRadius:5 }} key={item.id}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img width={200} height={150} src={item.url_imagem} alt={item.nome} style={{ borderRadius: 5, marginTop: 15 }} />
                        </div>
                        <div style={{marginLeft:5}}>
                            <p>{item.nome}</p>
                            <p>Preço: R$ {item.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        </div>
                        <Contador></Contador>
                    </div>
                ))}
            </div>
        </div>
    );
}