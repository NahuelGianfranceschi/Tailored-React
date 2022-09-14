import './ItemDetail.css'
import ItemCount from './ItemCount';
import React, {useState}  from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext();

    const onAdd = (unidades) => {
        setGoToCart(true);
        addProduct(data, unidades);
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