import { useEffect, useState } from "react"
import Item from "./Item"
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemList = () => {

  const [items, setItems] = useState([])

  useEffect(() => {

    const db = getFirestore()

    const itemsCollection = collection(db, 'productos')
    getDocs(itemsCollection).then( snapshot => {
      
      const itemsList = []

      snapshot.docs.forEach( s => {
        console.log(s.data())
        itemsList.push({id: s.id, ...s.data()})
      })

      setItems(itemsList)
    })
  }, [])

  return(
    <div>
      {
        items.map(item => {
          return(
            <Item key={item.id} producto={item} initial='1' stock='5' />
          )
        })
      }
    </div>
  )}

export default ItemList