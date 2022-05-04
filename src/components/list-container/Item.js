import '../../App.css';
import { Link } from 'react-router-dom';

const Item = ( {producto} ) => {

  return (
    <>
      <div className="bg-slate-100 mx-auto mt-32 mb-16 h-96 w-96 flex rounded-t-xl relative">
        <div className='bg-blue-900 h-48 absolute mt-48 opacity-80 rounded-t-md'>
          <h2 className='text-center text-white font-black text-xl mt-5 px-10'> {producto.title}</h2>
          <p className='text-justify text-white font-bold text-md px-10 h-28 mt-5'> {producto.description}. Precio: {producto.price} </p>
          <Link to={`/item/${producto.id}`}><button className='text-slate-100 text-base font-bold uppercase bg-blue-500 hover:bg-blue-900 transition-colors rounded-t-xl border-blue-200 border-2 w-96 relative'>Más información</button></Link>
          <button className='text-slate-100 text-base font-black uppercase bg-blue-500 hover:bg-blue-900 transition-colors rounded-b-xl border-blue-200 border-2 w-96 relative mt-2 mb-16'>Contratar plan</button>
        </div>
        <img src={producto.pictureUrl} alt={producto.title} className='mx-auto w-96 rounded-t-xl'/>
      </div>
    </>
  )
}

export default Item