import ItemCount from "../list-container/ItemCount";
import { useState } from "react"
import { Link } from "react-router-dom";
import '../../css/ItemDetail.css'

const ItemDetail = ( { detalles, initial, stock }) => {

    const { img, title, info, dur, price } = detalles

    const [terminar, setTerminar] = useState(false)

    const onAdd = (count) => {
        setTerminar(true)
    }

    return (
        <>
            <div className="detail-container">
                <img src={ img } alt={ title } className='img'/>
                <div className="info-container">
                    <h2 className="info-title">{ title }</h2>
                    <p className="info">{ info }</p>
                    <p className="info-dur-price">El plan tiene una duración de { dur } y un costo de ${ price }</p>
                    {
                        terminar ? (
                            <div className="btn-container">
                                <button className="btn-end">
                                    <Link to={ '/cart' }>
                                        <h3 className="end-buying">
                                            Terminar compra
                                        </h3>
                                    </Link>
                                </button>
                            </div>
                        ) : (
                            <ItemCount stock={ stock } initial={ initial } onAdd={ onAdd } producto={ detalles } />
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default ItemDetail