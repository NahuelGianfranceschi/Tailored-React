    import "./ItemListContainer.css";
    import {useState, useEffect} from "react";
    import Product from "./Product";
    import trajes from "../../mock/data";

    const ItemListContainer = (props) => {
     
     const {products} = props;   
     const [productos, setProductos] = useState([]);
     
      
      
     useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(trajes);
            }, 500);
        });
    },) 

    const data = new Promise((resolve, reject) => {
        
      let condition = true
      setTimeout(()=> {

        if(condition){
          resolve('La compra fue exitosa')
        }else{
          reject('Ocurrio un Error')
        }
      },2000)

    })

    console.log(data)
      
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