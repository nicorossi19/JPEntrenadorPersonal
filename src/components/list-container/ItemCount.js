import React, { useState } from 'react';
import { GrSubtract, GrAdd } from "react-icons/gr";


const ItemCount = ( { stock, initial } ) => {

    const [item, setItem] = useState(1);

    const resta = () => initial < item ? setItem(item - 1) : false;
    const suma = () => item < stock ? setItem(item + 1) : false;

    
    return (
    <>
        <div className='flex-col items-center h-96 mt-20'>
            <div className='bg-gray-200 h-52 w-96 mx-auto rounded-2xl'>
                <div className='py-8'>
                    <h1 className='text-center text-xl'>Artículos</h1>
                </div>
                <div className='flex justify-between items-center bg-slate-100 border-indigo-500 border-2 h-10 w-80 rounded-lg overflow-hidden mx-auto'>
                    <button className='h-10 w-20 transition-colors hover:bg-indigo-500' onClick={resta}><GrSubtract className='mx-auto' /></button>
                    <h1>{item}</h1>
                    <button className='h-10 w-20 transition-colors hover:bg-indigo-500' onClick={suma}><GrAdd className='mx-auto' /></button>
                </div>
            </div>
            <button className='h-12 w-96 mt-5 bg-indigo-500 border-slate-100 border-2 mx-auto rounded-lg flex items-center justify-center transition-colors hover:bg-indigo-600'>
                <h3 className='text-xl w-auto h-auto text-slate-100'>Agregar al carrito</h3>
            </button>
        </div>
    </>
    )
}
export default ItemCount