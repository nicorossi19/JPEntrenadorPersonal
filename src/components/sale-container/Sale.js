import { Link } from 'react-router-dom'
import '../../css/Sale.css'

const Sale = ( { product } ) => {

  const { title, subtitle, id, price, img } = product

  return (
    <>
      <div className='item-container'>
        <div className='img-container'>
          <img src={ img } alt={ title } />
        </div>
        <div className='item-content'>
          <div className='item-title'>
            <h3>{ title }</h3>
          </div>
          <div className='item-body'>
            <p>{ subtitle }</p>
          </div>
          <div className='item-price'>
            <h3>${ price }</h3>
          </div>
          <Link to={ `/item/${id}` }>
            <button className='btn'>
              Más información
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Sale