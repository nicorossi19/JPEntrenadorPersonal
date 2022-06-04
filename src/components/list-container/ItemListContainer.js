import '../../css/ItemListContainer.css'

const ItemListContainer = ( { title, subtitle }) => {

  return (
    <div className='title-container'>
      <h1 className='title'>{title}</h1>
      <h2 className='subtitle'>{subtitle}</h2>
    </div>
  )
}
export default ItemListContainer