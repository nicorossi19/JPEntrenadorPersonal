import { GrSubtract, GrAdd } from "react-icons/gr";
import { useState } from "react";

const ItemDetail = ( { detalles, initial, stock }) => {

    const [item, setItem] = useState(1);

    const resta = () => initial < item ? setItem(item - 1) : false;
    const suma = () => item < stock ? setItem(item + 1) : false;


    return (
        <>
        <div className="w-screen h-[800px] mt-32 flex flex-wrap justify-center">
            <img src={detalles.img} alt={detalles.title} className='fixed mx-auto w-screen opacity-50'/>
            <div className="relative w-full flex justify-center flex-wrap">
                <h2 className="absolute text-white text-5xl text-center font-black rounded-md p-2 mt-10">{detalles.title}</h2>
                <p className="absolute text-xl text-center text-white font-bold mt-32 w-[950px]">{detalles.desc}</p>
                <p className="absolute text-xl text-justify text-white font-semibold mt-96 w-[950px]">{detalles.info}</p>
                <p className="absolute text-2xl w-full text-center text-white font-black mt-[550px] uppercase">El plan tiene una duración de {detalles.dur} y un costo de ${detalles.price}</p>
                <div className='flex flex-wrap mt-[500px] items-center'>
                    <div className='flex justify-between items-center bg-slate-100 border-indigo-500 border-2 w-60 h-10 rounded-md overflow-hidden mx-auto mr-24'>
                        <button className='h-10 w-20 transition-colors hover:bg-indigo-500' onClick={resta}><GrSubtract className='mx-auto' /></button>
                        <h1>{item}</h1>
                        <button className='h-10 w-20 transition-colors hover:bg-indigo-500' onClick={suma}><GrAdd className='mx-auto' /></button>
                    </div>
                    <div className="mx-auto">
                        <button className='h-10 w-52 bg-indigo-500 border-slate-100 border-2 rounded-lg transition-colors hover:bg-indigo-600'>
                        <h3 className='text-xl w-auto h-auto text-slate-100'>Agregar al carrito</h3>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ItemDetail