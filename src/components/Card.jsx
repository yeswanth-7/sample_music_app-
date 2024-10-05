import React from 'react'

function Card({data,index,handleclick}) {
    const {image,artistName,added,songName} = data
  return (
    <div className='w-60  bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative mt-10'>
        <div className='w-20 h-20 bg-orange-500 rounded-md overflow-hidden'>
            <img className='h-full w-full object-cover ' src={image} alt="" />
        </div>
        <div>
            <h2 className='text-xl font-semibold'>{songName}</h2>
            <p className='text-sm '>{artistName }</p>
        </div>
        <button onClick={()=>handleclick(index)} className={`px-4 py-3 ${added === false? "bg-orange-500" : "bg-teal-700"} whitespace-nowrap text-sm text-white rounded-3xl absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%]`}>
        {added === false? "Add to favourites" : "added"}</button>
    </div>
  )
}

export default Card