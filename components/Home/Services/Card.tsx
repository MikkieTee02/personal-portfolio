
import React from 'react'


type Props ={
  icon: React.JSX.Element;
 name: string;
 description: string;
}

const Card = ({description, icon, name}:Props) => {
  return (
    <div className='bg-slate-800  hover:shadow-lg  border-slate-700 px-4  py-6 border-2 rounded-lg  hover:border-teal-400 transition-all duration-300 group'>
      <div className=' text-gray-500 bg-slate-950 border-black border-2 group-hover:border-teal-500 rounded-full inline-flex p-4 items-center justify-center group-hover:text-teal-400'>{icon}</div>
      <h2 className='mt-6 text-lg md:text-xl font-semibold text-gray-200 group-hover:text-teal-400'>{name}</h2>
      <p className='mt-6 text-gray-400'>{description}</p>
    </div>
  )
}

export default Card
