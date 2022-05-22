import Item from "./Item"
import { useAppContext } from "../context/AppContext"

const ItemList = () => {

  const { products } = useAppContext()

  return(
    <div>
      {
        products.map(item => {
          return(
            <Item key={item.id} producto={item} initial='1' stock='5' />
          )
        })
      }
    </div>
  )}

export default ItemList