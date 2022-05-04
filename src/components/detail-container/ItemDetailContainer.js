import { useEffect, useState } from 'react'
import detail from '../../assets/detail'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  

  const { itemId } = useParams()

  const [item, setItem] = useState( {} )
  

  useEffect(() => {

    const promesa = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(detail);
        reject();
      })
    })

    promesa.then(result => {
      const productoEncontrado = result.find( i => i.id == itemId )
      setItem(productoEncontrado)
    })
  }, [itemId])

  return (
    <>
      <section className="flex flex-wrap px-10">
        <ItemDetail detalles={item} initial="1" stock="5" />
      </section>
    </>
  )
}

export default ItemDetailContainer