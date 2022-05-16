import { IoCartOutline } from "react-icons/io5";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {

  // Mostrar en tiempo real qué cantidad de ítems están agregados
  const { cart } = useCartContext()


  return (
    <>
      <div className="w-16 flex justify-between items-center hover:opacity-80 transition-all">
        <IoCartOutline className="w-7 h-7 text-white"/>
        {
          // El cart widget no se debe mostrar más si no hay items en el carrito (decidí dejar el ícono y ocultar el 0)
          cart.length > 0 &&
            <div className="text-white font-semibold text-xl bg-rose-700 px-2 rounded-xl">
              {cart.length}
            </div>
        }
        
      </div>
    </>
  )
}
export default CartWidget

