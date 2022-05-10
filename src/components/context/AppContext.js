import { createContext, useContext, useEffect, useState } from "react"
import prods from '../../assets/detail'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ( {children} ) => {

  const [products, setProducts] = useState([prods])

  console.log(products)

  return (
    <AppContext.Provider
      value={{
        products
      }}
      >
        {children}
      </AppContext.Provider>
  )
}
export default AppContextProvider