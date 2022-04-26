import './App.css';
import ItemListContainer from './components/list-container/ItemListContainer';
import NavBar from './components/navbar/NavBar';
// import StarshipsContainer from './components/swapi/StarshipsContainer';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Conocé las ofertas de la semana" />
    </>
  );
}

export default App;
