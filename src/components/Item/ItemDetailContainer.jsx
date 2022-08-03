import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import React, {useState, useEffect} from "react";
import trajes from './mock/data';
import { useParams } from "react-router-dom";



export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const [detalleId] = useParams();
    
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(trajes);
            }, 500)
        });
        getData.then(res => setData(res.find(traje => traje.id === parseInt(detalleId))));
    },[detalleId]);

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;