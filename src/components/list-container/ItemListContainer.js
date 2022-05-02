import ItemDetailContainer from "../detail-container/ItemDetailContainer";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ( { greeting }) => {

  return (
    <>
      <div className="h-screen">
        <h1 className="text-white text-center text-8xl mt-20 uppercase font-bold">{greeting}</h1>
        <ItemList />
        <ItemDetailContainer />
        <ItemCount stock='5'  initial='1'/>
      </div>
    </>
  )
}
export default ItemListContainer