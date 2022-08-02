import './ItemDetail.css'
import ItemCount from './ItemCount';

export const ItemDetail = ({data}) => {
    const onAdd = (unidades) => {
        console.log (`Compraste ${unidades} unidades`);
    }
    return (
        <div className="container">
            <div className="detail box2">
                <img className="detail_image" src={data.image} alt="" />
                <div className="content">
                    <h1>{data.nombre}</h1>
                    <p><strong>$ </strong>{data.precio}</p>
                    <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;