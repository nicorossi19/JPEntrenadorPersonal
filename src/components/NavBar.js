const NavBar = () => {

  const navbar = {
    navbarStyle: 'h-16 px-20 bg-cyan-500 flex justify-between items-center shadow-white border-b-2',
    logo: 'pl-5 text-white text-xl',
    productsAndLogin: 'w-7/12 flex justify-between items-center',
    products: 'mr-8 text-xl text-white hover:opacity-80',
    signIn: 'mr-8 text-lg text-white hover:opacity-80',
    signUp: 'mr-8 text-lg text-white hover:opacity-80 border rounded-md py-1 px-5'
  }

  return (

    <>
      <nav className= {navbar.navbarStyle}>
        <h2 className={navbar.logo}><a href='#'>JP Entrenador Personal</a></h2>
        <div className={navbar.productsAndLogin}>
          <ul className='flex'>
            <li><a className={navbar.products} href='#'>Productos</a></li>
            <li><a className={navbar.products} href='#'>Ofertas</a></li>
          </ul>
          <ul className='flex'>
            <li><a className={navbar.signIn} href='#'>Inicia sesión</a></li>
            <li><a className={navbar.signUp} href='#'>Regístrate</a></li>
          </ul>
        </div>
      </nav>
    </>
    
  )
}

export default NavBar