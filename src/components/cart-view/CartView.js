import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import Cart from "./Cart"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";


const CartView = () => {
  
  const { cart } = useCartContext()

  const date = new Date().toDateString();

  const [order, setOrder] = useState(false)
  const [orderId, setOrderId] = useState()

  let cantidad = 0
  cart.forEach( item => {
     cantidad += item.quantity * item.price
  })

  const sendOrder = async () => {
    const order = {
      buyer: {
        name: "Nicolás",
        phone: "+541187459631",
        email: "nicolas@hotmail.com"
      },
      items: cart,
      total: cantidad,
      date: date
    };

    const db = getFirestore()

    const ordersCollection = collection(db, "orders");

    const response = await addDoc(ordersCollection, order)

    setOrder(true)
    setOrderId(response.id)
  }



  return (
    <>
      {
        cart.length > 0 ? cart.map(prod => {
          return(
            <Cart key={prod.id} product={prod} />
          )
        }) :
        <div className="h-screen flex flex-col justify-center items-center">
          <h2 className="uppercase text-white font-extrabold text-5xl">No hay nada en el carrito.</h2>
          <h3 className="uppercase text-white font-extrabold text-4xl">Echa un vistazo a los <button><Link to={'/productos'} className='text-rose-600 uppercase font-extrabold underline hover:opacity-75 transition-all'>productos</Link></button> que tenemos.</h3>
        </div>
      }
      {
        cart.length > 0 &&
        <div className="flex justify-end mx-20">
          <h2 className="text-white text-xl font-bold mt-12 mr-10">Total: ${cantidad}</h2>
          <button className='h-10 w-52 bg-indigo-500 border-slate-100 border-2 rounded-lg transition-colors hover:bg-indigo-600 mt-10' onClick={sendOrder}>
            <h3 className='text-xl w-auto h-auto text-slate-100'>Ir a pagar</h3>
          </button>
        </div>
      }
      {
        order && <div className="text-white text-4xl font-bold text-center mt-20">SU CÓDIGO DE ORDEN ES <span className="text-indigo-500">"{orderId}"</span></div>
      }
    </>
  )
}
export default CartView