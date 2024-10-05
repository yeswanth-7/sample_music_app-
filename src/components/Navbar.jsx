import React from 'react'
import Style from './Style.module.css';

function Navbar({data}) {
  return (
    <div className='w-full p-2 px-20 bg-zinc-100 flex justify-between items-center '>
        <h3 className={`${Style.a}`}>Orange</h3>
        <div className='flex bg-orange-500 p-2 text-sm gap-3 rounded text-white '>
            <h3>favourites</h3>
            <h4>{data.filter(item=>item.added).length}</h4>
        </div>
    </div>
  )
}

export default Navbar