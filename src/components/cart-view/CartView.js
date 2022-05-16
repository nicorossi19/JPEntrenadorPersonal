import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import Cart from "./Cart"


const CartView = () => {
  
  const { cart } = useCartContext()

  console.log(cart)

  return (
    <>
      {
        cart.length > 0 ? cart.map(prod => {
          return(
            <Cart key={prod.id} product={prod} />
          )
        }) :
        // De no haber ítems muestra un mensaje diciendo que no hay ítems y un react-router Link o un botón para que pueda volver al Landing.
        <div className="h-screen flex flex-col justify-center items-center">
          <h2 className="uppercase text-white font-extrabold text-5xl">No hay nada en el carrito.</h2>
          <h3 className="uppercase text-white font-extrabold text-4xl">Echa un vistazo a los <button><Link to={'/productos'} className='text-rose-600 uppercase font-extrabold underline hover:opacity-75 transition-all'>productos</Link></button> que tenemos.</h3>
        </div>
      }
    </>
  )
}
export default CartView