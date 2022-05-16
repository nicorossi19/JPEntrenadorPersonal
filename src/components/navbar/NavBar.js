import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {

  
  return (
    <>
      <nav className='w-full h-20 px-20 flex items-center justify-between bg-blue-900'>
        <div className="flex items-center">
          <h1 className='text-slate-100 text-3xl font-black uppercase hover:opacity-70 transition-opacity'><Link to='/'>JP Entrenador</Link></h1>
          <ul className='ml-20 text-xl text-white flex items-center'>
            <li className="mr-8"><Link to='/' className="hover:bg-rose-700 px-3 py-1 rounded-md transition-all">Inicio</Link></li>
            <li className="mr-8"><Link to='/productos' className="hover:bg-rose-700 px-3 py-1 rounded-md transition-all">Productos</Link></li>
            <li><Link to={'/descuentos'} className="hover:bg-rose-700 px-3 py-1 rounded-md transition-all">Ofertas</Link></li>
          </ul>
        </div>
        <div className="flex">
          <ul className='flex ml-20 text-lg text-white mr-20'>
            <li><a className='mr-8 hover:bg-rose-700 px-3 py-1 rounded-md transition-all' href="#">Inicia sesión</a></li>
            <li><a className='border rounded-md py-1 px-5 hover:opacity-80 hover:bg-rose-700 transition-all' href="#">Regístrate</a></li>
          </ul>
          <Link to={'/cart'}><CartWidget /></Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar