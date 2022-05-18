
import './App.css';
import ItemListContainer from './components/list-container/ItemListContainer';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './components/list-container/ItemList';
import ItemDetailContainer from './components/detail-container/ItemDetailContainer';
import SaleList from './components/sale-container/SaleList';
import CartContextProvider from './components/context/CartContext';
import AppContextProvider from './components/context/AppContext';
import CartView from './components/cart-view/CartView';
import ProductDetail from './components/firebase-examples/ProductDetail';
import Products from './components/firebase-examples/Products';


function App() {
  return (
    <>
      <AppContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
              <Routes>
                <Route path='/' element={ <ItemListContainer greeting="JP Entrenador Personal" /> } />
                <Route path='/productos' element={ <ItemList/> } />
                <Route path='/item/:id' element={ <ItemDetailContainer/> } />
                <Route path='/descuentos' element={ <SaleList /> } />
                <Route path='/cart' element= { <CartView /> } />
                <Route path='/product' element= { <ProductDetail /> } />
                <Route path='/products' element= { <Products /> } />
              </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
    </>


  );
}

export default App;