//@ts-check
import './App.css';
import NavBar from './components/NavBar/NavBar'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        <NavBar />
      </header>
      <body>
        <ItemListContainer msg="Bienvenido a la web" />
      </body>
    </div>
  );
}

export default App;
