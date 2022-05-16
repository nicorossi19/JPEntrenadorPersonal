import { useCartContext } from "../context/CartContext"
import { BsTrash } from "react-icons/bs";

const Cart = ( {product} ) => {

  const { title, price, img, quantity, subtitle } = product

  const { deleteFromCart } = useCartContext()

  const priceProducts = () => {
    return price * quantity
  }

  
  

  return (
    <>
      <div className="h-32 mb-10 mt-14 mx-20 flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <img src={img} className='h-20'/>
          <div>
            <h2 className="text-white font-extrabold text-2xl">{title}</h2>
            <p className="text-white font-medium text-base">{subtitle}</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <h2 className="text-white font-extrabold text-lg">x{quantity}</h2>
          <h2 className="text-white font-extrabold text-lg">$ {priceProducts()}</h2>
          <button className="bg-white p-2 rounded" onClick={() => deleteFromCart(product)}><BsTrash /></button>
        </div>
      </div>
      <hr className="mx-20"/>
    </>
  )
}
export default Cart