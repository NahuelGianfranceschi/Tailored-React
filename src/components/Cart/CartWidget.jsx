
import './CartWidget.css'
import { BiCart } from 'react-icons/bi'
import { useCartContext } from '../../context/CartContext';

function CartWidget () {

    const {totalProducts} = useCartContext();

    return(
        <>
        <BiCart className="icono" />
        <span>{totalProducts() || ''}</span>
        </>
    );
}

export default CartWidget