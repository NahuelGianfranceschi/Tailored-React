import React from 'react'

export default function Product(props) {
    const{product} = props;
  return (
    <div>
        <img className='traje' src={product.imagen} alt={product.nombre} />
        <h3>{product.nombre}</h3>
        <div>${product.precio}</div>
        <div>
            <button>Añadir al carrito</button>
        </div>

    </div>
  )
}
