import './App.css';
import NavBar from './componentes/navbar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Mi Tienda"}/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada ', quantity)}/>
    </div>
  );
}

export default App;
