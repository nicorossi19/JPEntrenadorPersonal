
import './App.css';
import ItemDetailContainer from './components/detail-container/ItemDetailContainer';
import ItemListContainer from './components/list-container/ItemListContainer';
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Conocé las ofertas de la semana" />
      {/* <ItemDetailContainer /> */}
    </>
  );
}

export default App;