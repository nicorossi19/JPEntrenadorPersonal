import { createContext, useContext, useEffect, useState } from "react"
// import prods from '../../assets/detail'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ( {children} ) => {

  const [products, setProducts] = useState([])
  
  useEffect(() => {

    const db = getFirestore()

    const itemsCollection = collection(db, 'productos')
    getDocs(itemsCollection).then( snapshot => {
      
      const itemsList = []

      snapshot.docs.forEach( s => {
        
        itemsList.push({id: s.id, ...s.data()})
      })

      setProducts(itemsList)
    })
  }, [])


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