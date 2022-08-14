import React from 'react'
import { useCartContext } from '../../context/CartContext'
import Product from '../Item/Product';
import ItemCart from './ItemCart';

const Cart = () => {

  const { cart, totalPrice } = useCartContext();

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
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p>
        Total: {totalPrice()}
      </p>
    </>
  )
}

export default Cart