import './ItemDetail.css'
import ItemCount from './ItemCount';
import React, {useState}  from 'react';
import { Link } from 'react-router-dom';

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false)

    const onAdd = (unidades) => {
        setGoToCart(true);
    }
    return (
        <div className="container">
            <div className="detail box2">
                <img className="detail_image" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.nombre}</h1>
                    <p><strong>$ </strong>{data.precio}</p>
                    {
                        goToCart
                        ? <Link to='/cart'>Finalizar Compra</Link>
                        :<ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;