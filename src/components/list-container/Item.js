import '../../App.css'
import React, { useState } from 'react';
import { GrSubtract, GrAdd } from "react-icons/gr";
import { BsCartPlus } from "react-icons/bs";

const Item = ({producto, initial, stock}) => {

  const [item, setItem] = useState(1);

  const resta = () => initial < item ? setItem(item - 1) : false;
  const suma = () => item < stock ? setItem(item + 1) : false;

  return (
    <>
      <div className="bg-slate-100 mx-auto mt-16 mb-36 h-96 w-96 flex rounded-xl relative">
        <div className='bg-indigo-600 w-96 h-48 absolute mt-48 rounded-xl opacity-80'>
          <h2 className='text-center text-white font-black text-xl mt-5 px-10'> {producto.title}</h2>
          <p className='text-justify text-white font-bold text-md px-10 h-28 mt-5'> {producto.description}. Precio: {producto.price} </p>
          <button className='text-white text-lg bg-indigo-500 hover:bg-indigo-600 transition-colors rounded-md border-slate-100 border-2 w-96 relative'>Más información</button>
          <div className='flex mx-10 mt-3'>
            <div className='flex justify-between items-center bg-slate-100 border-indigo-500 border-2 w-60 h-7 rounded-md overflow-hidden mx-auto'>
                <button className='h-10 w-20 transition-colors hover:bg-indigo-500' onClick={resta}><GrSubtract className='mx-auto' /></button>
                <h1>{item}</h1>
                <button className='h-10 w-20 transition-colors hover:bg-indigo-500' onClick={suma}><GrAdd className='mx-auto' /></button>
            </div>
            <BsCartPlus className="w-6 h-6 text-white hover:opacity-80 hover:cursor-pointer"/>
          </div>
        </div>
        <img src={producto.pictureUrl} alt={producto.title} className='mx-auto w-96 rounded-xl'/>
      </div>
    </>
  )
}

export default Item