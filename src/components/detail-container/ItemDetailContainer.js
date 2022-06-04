import { useEffect, useState } from 'react'
import '../../css/ItemDetailContainer.css'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const ItemDetailContainer = () => {
  
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const { products } = useAppContext()

  useEffect(() => {
    const findProduct = products.find(product => product.id === id)
    setProduct(findProduct)

  }, [id])



  return (
    <>
      <section className='section'>
        <ItemDetail detalles={product} initial="1" stock="5" />
      </section>
    </>
  )
}

export default ItemDetailContainer