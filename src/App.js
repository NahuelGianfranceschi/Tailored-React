
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import itemDetail from './components/Item/ItemDetail';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import trajes from './mock/data';
import ItemCount from './components/Item/ItemCount';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext'; 

function App() {
  const {products} = trajes;
  return (
    <BrowserRouter>
    <div className="App" >
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />}></Route>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>  
      </CartProvider>
      <ItemListContainer greeting="Te damos la Bienvenida a Tailored"
       products={products}/>
       
    </div>
    </BrowserRouter>
  );
}

export default App;

// rgb(197, 183, 145);