    import "./ItemListContainer.css";
    import {useState, useEffect} from "react";
    import Product from "./Product";

    const ItemListContainer = (props) => {
     
     const {products} = props;   
     const [productos, setProductos] = useState([]);
     
      
      
    useEffect( () => {
       
      fetch('ruta al json').then(res => setProductos(res.json()))
      //Podes evitar poner la ruta relativa al JSON si lo importas directamente.
    
    }, [])
    
      
     return (
        
      <div className="contenedor">
      {/* <h3 className="greeting">{props.greeting}</h3> */}

      {/* <ItemList products={productos} /> */}
       {products.map((product) =>( 
            <Product key={product.id} product={product}></Product>
       ))}
      </div>
     );
    };
    export default ItemListContainer;    