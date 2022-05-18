import { useEffect, useState } from 'react'
// import detail from '../../assets/detail'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
  
  const { id } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const db = getFirestore()

    const productos = doc(db, 'productos', id)

    getDoc( productos ).then( snapshot => {
      if (snapshot.exists()) {
        setProduct(snapshot.data())
      }
    })
  })
  


  // const [item, setItem] = useState( {} )
  

  // useEffect(() => {

  //   const promesa = new Promise((resolve, reject) => {

  //     setTimeout(() => {
  //       resolve(detail);
  //       reject();
  //     })
  //   })

  //   promesa.then(result => {
  //     const productoEncontrado = result.find( i => i.id == itemId )
  //     setItem(productoEncontrado)
  //   })
  // }, [itemId])

  return (
    <>
      <section className="flex flex-wrap px-10">
        <ItemDetail detalles={product} initial="1" stock="5" />
      </section>
    </>
  )
}

export default ItemDetailContainer