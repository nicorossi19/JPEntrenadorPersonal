import '../../css/ItemList.css'
import { useEffect, useState } from "react"
import { collection, query, where, getDocs, getFirestore, doc } from 'firebase/firestore'
import Sale from "./Sale"
import loadingGif from '../../assets/loadingGif.gif'

const SaleList = () => {
    
    const [products, setProducts] = useState([])

    useEffect(() => {

      const db = getFirestore()
      
      const q = query(collection(db, 'productos'), where('onSale', '==', true));
      getDocs(q).then ( snapshot => {

        const onSaleList = []

        snapshot.docs.forEach( s => {
          onSaleList.push({id: s.id, ...s.data()})
        })

        setProducts(onSaleList)

      })

    }, [])

    return (
        <div className='card-container'>
            { products.length > 0 ?
            products.map( item => {
                return(
                    <Sale key={ item.id } product={ item } initial='1' stock='5' />
                )
            }) :
                <div className='loader-container'>
                    <img src={ loadingGif } className='loader' />
                    <h2 className='loader-text'>Cargando...</h2>
                </div>
        
            }
        </div>
    )
}

export default SaleList