import { useEffect, useState } from "react"
import loadingGif from '../../assets/loadingGif.gif'
import Item from "./Item"
import productos from '../../assets/detail'

const ItemList = () => {

  const [items, setItems] = useState([])

  useEffect(() => {

    const promesa = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(productos);
        reject();
      }, 500)
    })

    promesa.then(result => {
      setItems(result)
    })
  }, [])

  return(
    <>
      <section className="flex flex-wrap px-10">
        {
          items.length > 0 ? items.map(item => {
            return(
              <Item key={item.id} producto={item} initial='1' stock='5' />
            )
          }) : <img className="mx-auto my-auto mt-80" src={loadingGif} alt='Cargando...'/>
        }
      </section>
    </>
  )}

export default ItemList