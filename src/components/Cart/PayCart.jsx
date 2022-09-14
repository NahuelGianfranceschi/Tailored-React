import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
//import Button from "./Button"
import { useCartContext } from "../../context/CartContext";


export default function PayCart ({getPurchaseId}){
    const {cart , totalPrice, clearCart} = useCartContext() ;
    const [buyer, setBuyer] = useState({});
    const [validation, setValidation] = useState(false);
    const db = getFirestore();

    const buyerData = (e) => { 
        e.target.name !== "emailValidation" && setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })

        e.target.name === "emailValidation" && setValidation(e.target.value === buyer.email)
    }
    const sendForm = async (e)=>{
        e.preventDefault();
        if(validation){

            const data = await addDoc(collection(db, "buyers"),{
                ...buyer,
                item: cart,
                total: `$${totalPrice}`
            })
            getPurchaseId(`${data.id}`)
            clearCart();
            /* mercadoPago(); */
        }else console.log("No coinciden los email")
    }
    return(
        <div className="cartContainer__pay">
            <form name="formulario" method="post" onSubmit={sendForm}>
                <label className="form__item form__item--Nombre">
                    <input className="input" name="Nombre" type="text"  placeholder="Nombre" onChange={buyerData} required/>
                </label>
                <label className="form__item form__item--Apellido">
                    <input className="input" name="Apellido" type="text" placeholder="Apellido" onChange={buyerData} required/>
                </label>
                <label className="form__item form__item--email">
                    <input className="input" name="email"  type="email"  placeholder="email"onChange={buyerData} required/>
                </label>
                <label className="form__item form__item--email">
                    <input className="input" name="emailValidation"  type="email"  placeholder="email" onChange={buyerData} required/>
                </label>
                <button type="submit" className="btn">Comprar</button>
            </form>
        </div>
    )
}