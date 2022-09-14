import React, {useState, useContext} from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
 
    const addProduct = (item, quantity) => {
        if (isInCart(item.id)){
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        }else{
            setCart([...cart, { ...item, quantity}]);
        }

    }
    const totalPrice = cart.map((e)=> e.precio*e.quantity).reduce((a,b)=> a + b,0);
    //const totalPrice= () => {
      //   cart.map((e)=> e.price*e.quantity).reduce((a,b)=> a + b,0);
    
   // }
    console.log(totalPrice)
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);


    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false; 
    
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
    


    return (
       <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
       }}>
            {children}
       </CartContext.Provider>
    )

}

export default CartProvider