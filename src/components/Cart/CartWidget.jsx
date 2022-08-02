
import './CartWidget.css'
//import { IconContext } from 'react-icons/lib';
import { BiCart } from 'react-icons/bi'

//const CartWidget = () =>{
    //return (
        //<IconContext.Provider value={{color:'#be2a8d', size:'2rem'}}>
        //    <a href='#' className='cart'>
        //        <BiCart />
        //    </a>
        //</IconContext.Provider>
    //);
//}

function CartWidget () {
    return(
        <BiCart className="icono" />
    );
}

export default CartWidget