import React from "react";
import { useCartContext } from "../../context/CartContext";
 import './ItemCart.css';

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
    return(
        <div className="ItemCart">
            <img className="imgcheckout" src={product.imagen} alt={product.title} />
            <div>
                <p>Nombre: {product.nombre}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Valor: {product.precio}</p>
                <p>Subtotal: ${product.quantity * product.precio} </p>
                <button onClick={() =>removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart