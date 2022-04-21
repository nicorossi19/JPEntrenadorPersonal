
import CartWidget from "./CartWidget"

const NavBar = () => {

  const navbar = {
    navbarStyle: 'mx-auto h-16 mt-5 px-20 flex items-center justify-between',
    logo: 'text-white text-3xl font-bold uppercase',
    products: 'ml-20 text-xl text-white flex items-center',
    login: 'flex ml-20 text-lg text-white mr-20',
    signIn: 'mr-8 hover:opacity-80',
    signUp: 'border rounded-md py-1 px-5 hover:opacity-80'
  }

  // bg-cyan-500 border-b-2 

  return (
    <>
      <nav className={navbar.navbarStyle}>
        <div className="flex items-center">
          <h1 className={navbar.logo}><a href="#">JP Entrenador</a></h1>
          <ul className={navbar.products}>
            <li className="mr-8"><a href="#">Productos</a></li>
            <li><a href="#">Ofertas</a></li>
          </ul>
        </div>
        <div className="flex">
          <ul className={navbar.login}>
            <li><a className={navbar.signIn} href="#">Inicia sesión</a></li>
            <li><a className={navbar.signUp} href="#">Regístrate</a></li>
          </ul>
          <a href="#"><CartWidget /></a>
        </div>
      </nav>
    </>
  )
}

export default NavBar