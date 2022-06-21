//@ts-check
import './App.css';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const onAdd = (auxInitial) => {
      alert(`Se agregaron ${auxInitial} productos al carrito.`);  
  }

  return (
    <div className="App">
      <header className="App-header" >
        <NavBar />
      </header>
      <body>
        <ItemListContainer msg="Bienvenido a la web" />
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </body>
    </div>
  );
}

export default App;
