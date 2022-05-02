import { useEffect, useState } from 'react'
import detail from './json/detail.json'
import ItemDetail from './ItemDetail'
import loadingGif from '../../assets/loadingGif.gif'

const ItemDetailContainer = () => {


  const [details, setDetails] = useState([])

  useEffect(() => {

    const promesa = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve(detail)
        console.log(detail);
        reject();
      }, 2000)
    })

    promesa.then(result => {
      setDetails(result)
    })
  }, [])

  return (
    <>
      <section className="flex flex-wrap px-10">
        {
          details.length > 0 ? details.map(detail => {
            return(
              <ItemDetail key={detail.id} detalles={detail} initial="1" stock="5" />
            )
          }) : <img className="mx-auto mt-10" src={loadingGif} alt='Cargando...'/>
        }
      </section>
    </>
  )
}

export default ItemDetailContainer