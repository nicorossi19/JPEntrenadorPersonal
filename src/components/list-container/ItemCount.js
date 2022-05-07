import React, { useState } from 'react';
import { GrSubtract, GrAdd } from "react-icons/gr";


const ItemCount = ( { stock, initial, onAdd } ) => {

    const [item, setItem] = useState(1);

    const resta = () => initial < item ? setItem(item - 1) : false;
    const suma = () => item < stock ? setItem(item + 1) : false;

    
    return (
    <>
        <div className='flex flex-wrap mt-[500px] items-center'>
            <div className='flex justify-between items-center bg-slate-100 border-indigo-500 border-2 w-60 h-10 rounded-md overflow-hidden mx-auto mr-24'>
                <button className='h-10 w-20 transition-colors hover:bg-indigo-500' onClick={resta}><GrSubtract className='mx-auto' /></button>
                    <h1>{item}</h1>
                <button className='h-10 w-20 transition-colors hover:bg-indigo-500' onClick={suma}><GrAdd className='mx-auto' /></button>
            </div>
            <div className="mx-auto">
                <button className='h-10 w-52 bg-indigo-500 border-slate-100 border-2 rounded-lg transition-colors hover:bg-indigo-600' onClick={() => onAdd(item)}>
                    <h3 className='text-xl w-auto h-auto text-slate-100'>
                        Agregar al carrito
                    </h3>
                </button>
            </div>
        </div>
    </>
    )
}
export default ItemCount