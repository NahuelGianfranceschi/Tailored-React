import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {
    const{product} = props;
    console.log(product.id)
  return (
    <div>
        <img className='traje' src={product.imagen} alt={product.nombre} />
        <h3>{product.nombre}</h3>
        <div>${product.precio}</div>
        <div>
        <Link to={`/detalle/${product.id}`} className="traje">
        <button>Ver mas</button>
        </Link>
        </div>

    </div>
  )


}
