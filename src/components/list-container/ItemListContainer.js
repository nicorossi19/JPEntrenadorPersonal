import heroImage from '../../assets/heroImage.jpg'

const ItemListContainer = ( { greeting }) => {

  return (
    <>
      <div className="w-full">
        <div className='flex justify-center'>
          <h1 className="absolute text-blue-600 bg-slate-100 mt-96 mx-auto p-5 rounded-sm text-8xl uppercase font-black">{greeting}</h1>
          <h2 className="absolute text-slate-100 bg-blue-600 mt-[505px] mx-auto p-5 rounded-sm text-3xl uppercase font-black">Rutinas para el gimnasio o tu casa</h2>
        </div>
        <img src={heroImage} alt='JP Entrenador Personal' />
      </div>
    </>
  )
}
export default ItemListContainer