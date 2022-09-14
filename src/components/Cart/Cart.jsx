import React from 'react'
import { useCartContext } from '../../context/CartContext'
//import Product from '../Item/Product';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import ItemCart from './ItemCart';
import { Link } from "react-router-dom";
import PayCart from './PayCart';
import { useState } from 'react'; 


const Cart = () => {

  const { cart, totalPrice } = useCartContext();
  const [purchaseId, setPurchaseId] = useState();
    const getPurchaseId  = (get) =>  {setPurchaseId(get)}

  const order = {
    buyer: {
      name: "Tomas",
      email: "TomasG@gmail.com",
      phone: "78425974",
      address: "Garavano 1500"
    },
    items: cart.map(product => ({id: product.id, title: product.nombre, price: product.precio, quantity: product.quantity }) ) ,
    total: totalPrice,
  }

  const handleClick = () => {
    const db = getFirestore();
    const orderscollection = collection(db,'orders');
    addDoc(orderscollection, order)
    .then(({ id }) => console.log(id));
 // Para corroborar la compra
  }

    if (cart.length === 0) { 
        return (
          <>
            <p>No hay nada en el carrito</p>
            <Link to='/'>Seguir comprando</Link>
          </>
        );
    }
  return (
    <>
    <div>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        Total: {totalPrice}
      </p>
      </div>
      <PayCart getPurchaseId={getPurchaseId}/>

    </>
  )
}

export default Cart