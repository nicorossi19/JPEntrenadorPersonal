import ItemCount from "./ItemCount";

const ItemListContainer = ( { greeting }) => {
  return (
    <>
      <div className="h-screen w-screen fixed">
        <h1 className="text-white text-center text-8xl mt-20 uppercase font-bold">{greeting}</h1>
        <ItemCount />
      </div>
    </>
  )
}
export default ItemListContainer