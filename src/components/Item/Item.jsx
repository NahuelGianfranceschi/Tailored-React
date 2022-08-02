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

const Item = ({ info }) => {
  return (
    <div className="trajeMain">
    <a href="_blank" className="traje">
       <img src={traje.image} alt=""/>
       <p className="textoTraje">{traje.title}</p>
   </a>
</div>
  )
}

export default Item