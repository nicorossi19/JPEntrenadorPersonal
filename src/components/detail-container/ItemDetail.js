import ItemCount from "../list-container/ItemCount";
import { useState } from "react"

const ItemDetail = ( { detalles, initial, stock }) => {

    const { img, title, desc, info, dur, price, id } = detalles

    const [terminar, setTerminar] = useState(false)

    const onAdd = (count) => {
        setTerminar(true)
    }

    const volver = () => {
        setTerminar(false)
    }

    return (
        <>
        <div className="w-screen h-[800px] mt-32 flex flex-wrap justify-center">
            <img src={img} alt={title} className='fixed mx-auto w-screen opacity-50'/>
            <div className="relative w-full flex justify-center flex-wrap">
                <h2 className="absolute text-white text-5xl text-center font-black rounded-md p-2 mt-10">{title}</h2>
                <p className="absolute text-xl text-center text-white font-bold mt-32 w-[950px]">{desc}</p>
                <p className="absolute text-xl text-justify text-white font-semibold mt-96 w-[950px]">{info}</p>
                <p className="absolute text-2xl w-full text-center text-white font-black mt-[550px] uppercase">El plan tiene una duración de {dur} y un costo de ${price}</p>
                {
                    terminar ? (
                        <div className="absolute mx-auto bg-red-500 h-0 mt-[650px]">
                            <button className='h-10 w-52 bg-indigo-500 border-slate-100 border-2 rounded-lg transition-colors hover:bg-indigo-600'>
                                <h3 className='text-xl w-auto h-auto text-slate-100'>
                                    Terminar compra
                                </h3>
                            </button>
                            <button onClick={volver}>
                                <h3 className='text-xl text-white ml-10'>Volver</h3>
                            </button>
                        </div>
                    ) : (
                        <ItemCount stock={stock} initial={initial} onAdd={onAdd} id={id}/>
                    )}
            </div>
        </div>
        </>
    )
}
export default ItemDetail