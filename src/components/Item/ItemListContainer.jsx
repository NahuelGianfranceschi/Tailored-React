    import "./ItemListContainer.css";
    import {useState, useEffect} from "react";
    import Product from "./Product";
    import trajes from "../../mock/data";
    import { useParams } from "react-router-dom";
    import { gFetch } from "../../mock/helpers";
    import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

    const ItemListContainer = (props) => {

      const [setData] = useState([]);
      const {categoriaId} = useParams();
     
     const {products} = props;   
     const [productos, setProductos] = useState([]);
     
     const {} = useParams();
            
     useEffect(()=>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
       
         if (categoriaId) {

          const queryFilter = query(queryCollection, where('categoria','==', categoriaId))
          getDocs(queryFilter)
            .then(res => setData(res.docs.map(product=>({ id: product.id, ...product.data() }))))

         }else{

          getDocs(queryCollection)
          .then(res => setData(res.docs.map(product=>({ id: product.id, ...product.data() }))))

         }
    },[categoriaId]) 

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