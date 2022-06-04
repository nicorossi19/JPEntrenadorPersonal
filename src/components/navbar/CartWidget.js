import { IoCartOutline } from "react-icons/io5";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {

  const { cart } = useCartContext()


  return (
    <>
      <div className="w-16 flex justify-between items-center hover:opacity-80 transition-all">
        <IoCartOutline className="w-7 h-7 text-white"/>
        {
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

