import NavBar from './components/NavBar'
import Contador from './components/CardWidget/Contador'
// import Item from './components/CardWidget/Item'
import './App.css'
import ItemList from './components/ItemListContainer/ItemList'

function App() {

  return (
   <div>
      <NavBar />
      {/* <Contador /> */}
      {/* <Item /> */}
      <ItemList></ItemList>
   </div>
  )
}

export default App
