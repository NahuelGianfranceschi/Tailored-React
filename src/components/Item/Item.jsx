// import "./Item.css"
// import React from "react";

// const Item = ({info}) => {
//     return (
//         <a href="#" className="traje">
//             <img src={info.image} alt=""/>
//             <p>{info.title}</p>
//         </a>
//     )
// }

// export default Item; 

import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const Item = ({ info }) => {



  return (
    <div className="trajeMain">
    
       <img src={traje.image} alt=""/>
       <p className="textoTraje">{traje.title}</p>
   
</div>
  )
}

export default Item