import '../../css/ItemList.css'
import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Item from "./Item"
import loadingGif from '../../assets/loadingGif.gif'



const ItemList = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    
    const db = getFirestore()

    const itemsCollection = collection(db, 'productos')
    getDocs(itemsCollection).then ( snapshot => {

      const itemsList = []

      snapshot.docs.forEach( s => {
        itemsList.push({id: s.id, ...s.data()})
      })

      setProducts(itemsList)
    })

  }, [])
  
  


  return (
    <div className='card-container'>
      { products.length > 0 ?
        products.map( item => {
          return(
            <Item key={ item.id } product={ item } initial='1' stock='5' />
          )
        }) :
        <div className='loader-container'>
          <img src={loadingGif} className='loader' />
          <h2 className='loader-text'>Cargando...</h2>
        </div>
        
      }
    </div>
  )
}
export default ItemList