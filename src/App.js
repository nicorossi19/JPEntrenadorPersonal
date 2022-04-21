import './App.css';
import ItemCount from './components/list-container/ItemCount';
import ItemListContainer from './components/list-container/ItemListContainer';
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Conocé las ofertas de la semana" />
    </>
  );
}

export default App;
