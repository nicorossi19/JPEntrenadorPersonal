import { GrSubtract, GrAdd } from "react-icons/gr";
import { useState } from "react";

const ItemDetail = ( { detalles, initial, stock }) => {

    const [item, setItem] = useState(1);

    const resta = () => initial < item ? setItem(item - 1) : false;
    const suma = () => item < stock ? setItem(item + 1) : false;


    return (
        <>
            <div className="bg-indigo-500 h-[600px] w-[850px] mt-10 mx-auto rounded-md flex-col">
                <h2 className="text-center mt-5 h-10 font-extrabold text-xl text-white">{detalles.title}</h2>
                <p className="mx-32 text-center text-white font-semibold mt-5">{detalles.desc}</p>
                <p className="mx-32 text-center text-white font-semibold mt-5">{detalles.info}</p>
                <p className="mx-32 text-center text-white font-extrabold mt-5">El plan tiene una duración de {detalles.dur}</p>
                <h2 className="text-center mt-5 h-10 font-extrabold text-xl text-white">{detalles.price}</h2>
                <div className='flex mx-10 mt-3'>
                    <div className='flex justify-between items-center bg-slate-100 border-indigo-500 border-2 w-60 h-7 rounded-md overflow-hidden mx-auto'>
                        <button className='h-10 w-20 transition-colors hover:bg-indigo-500' onClick={resta}><GrSubtract className='mx-auto' /></button>
                        <h1>{item}</h1>
                        <button className='h-10 w-20 transition-colors hover:bg-indigo-500' onClick={suma}><GrAdd className='mx-auto' /></button>
                    </div>
                </div>
                <button className='h-10 w-52 mt-5 bg-indigo-500 border-slate-100 border-2 mx-auto rounded-lg flex items-center justify-center transition-colors hover:bg-indigo-600'>
                <h3 className='text-xl w-auto h-auto text-slate-100'>Agregar al carrito</h3>
                </button>
            </div>
        </>
    )
}
export default ItemDetail