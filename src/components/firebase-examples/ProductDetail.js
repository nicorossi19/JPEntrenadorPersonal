import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ProductDetail = () => {

  const [product, setProduct] = useState({})

  useEffect(() => {
    const db = getFirestore()

    const productos = doc(db, 'productos', 'wA6i17dcWU44bDtKRIUL')
    getDoc( productos ).then( (snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot)
        console.log(snapshot.id)
        // console.log(snapshot.data())
        setProduct(snapshot.data())
      }
    } )

  }, [])
  


  return (
    <>
      <div>{product.title}</div>
      <div>{product.subtitle}</div>
      <div>{product.desc}</div>
      <img src={product.img}/>
    </>
  )
}
export default ProductDetail