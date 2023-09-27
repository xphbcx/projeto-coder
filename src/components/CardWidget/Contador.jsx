import { useState } from 'react'
import '../../App.css'

function App() {
    const [count, setCount] = useState(0)
    const [date, setNewDate] = useState(null)

    function Contar() {
        setCount(prevstate => prevstate + 1)
        setNewDate(new Date())
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 100, alignItems: "center", flexDirection:'column' }}>
                <button onClick={Contar}>
                    Clique aqui
                </button>
                <div style={{padding:10}}>
                    Este foi o clique de nº {count}
                </div>
                <div>
                    {date?.toLocaleString()}
                </div>
            </div>
        </>
    )
}

export default App
