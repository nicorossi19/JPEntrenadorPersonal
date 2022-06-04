import '../../css/NavBar.css'
import { Link } from "react-router-dom"
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <>
      <div className='container'>
        <Link to='/' className="logo">JP Entrenador</Link>
        <div className='menu-container'>
          <ul className='menu-list'>
            <li className='menu-item'><Link to='/'>Inicio</Link></li>
            <li className='menu-item'><Link to='/productos'>Productos</Link></li>
            <li className='menu-item'><Link to='/descuentos'>Ofertas</Link></li>
          </ul>
        </div>
        <div className='user-container'>
          <ul className='user-list'>
            <li className='user-item'><a href='#' className='login'>Inicia sesión</a></li>
            <li className='user-item'><a href='#' className='register'>Regístrate</a></li>
          </ul>
          <Link to='/cart'><CartWidget /></Link>
        </div>
      </div>
    </>
  )
}
export default NavBar