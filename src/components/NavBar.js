const NavBar = () => {

  return (

    <>
      <nav className='Navbar'>
        <h2 className='Logo'><a href='#'>JP Entrenador Personal</a></h2>
        <div className='ProductsAndLogin'>
          <ul className='NavbarListProducts'>
            <li><a href='#'>Productos</a></li>
            <li><a href='#'>Ofertas</a></li>
          </ul>
          <ul className='NavbarListLog'>
            <li><a className='Signin' href='#'>Inicia sesión</a></li>
            <li><a className='Signup' href='#'>Regístrate</a></li>
          </ul>
        </div>
      </nav>
    </>
    
  )
}

export default NavBar