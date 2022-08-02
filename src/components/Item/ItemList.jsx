import './ItemList.css'
import Item from "../components/Item";
import React from "react";

const ItemList = ({data = []}) => {
    return(
        data.map(trajes => <Item key={trajes.id} info={trajes} />)
    );
}

export default ItemList; 