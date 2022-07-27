
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import itemDetail from './components/ItemDetail';


function App() {
  const {products} = itemDetail;
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Te damos la Bienvenida a Tailored"
       products={products}/>
    </div>
  );
}

export default App;
