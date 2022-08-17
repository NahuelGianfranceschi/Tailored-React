import ItemDetail from "./ItemDetail";
// import './ItemDetailContainer.css'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import React, {useState, useEffect} from "react";
import trajes from '../../mock/data';
import { useParams } from "react-router-dom";



export const ItemDetailContainer = () => {

    const [data, setData] = useState({});
    const [detalleId] = useParams();
    
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb,'products', detalleId);
        getDoc(queryDoc) 
        .then(res=> setData({ id: res.id, ...res.data() }))
        
    },[detalleId]);

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;