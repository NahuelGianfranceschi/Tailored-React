
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import itemDetail from './components/Item/ItemDetail';
import trajes from './mock/data';


function App() {
  const {products} = trajes;
  return (
    <div className="App" >
      <NavBar/>
      <ItemListContainer greeting="Te damos la Bienvenida a Tailored"
       products={products}/>
    </div>
  );
}

export default App;
