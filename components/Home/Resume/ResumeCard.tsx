
import React from 'react';
import { IconType } from 'react-icons';



type ResumeProps = {
    role: string;
    Icon: IconType;
    date?: string;
    description: string;
}

const ResumeCard = ({role, Icon, date, description}:ResumeProps) => {
  return (
    <div className='mb-6 hover:shadow-lg '>
       <div className=' md:h-52 flex items-start space-x-6 bg-slate-800 transition-all duration-300 p-4 sm:p-8 border-slate-700  hover:border-teal-400 group border-2 rounded-lg'>
       <div className='sm:h-14 sm:w-14 w-10  h-10 bg-slate-950 border-2 rounded-full flex items-center justify-center
       flex-col group-hover:border-teal-500'>
         <Icon className= "sm:w-8 sm:h-8 w-6 h-6 p-0.5 text-gray-500 2 group-hover:border-teal-500  group-hover:text-teal-400 "/>
       </div>
       <div className='flex-1'>
        {date && (
          <h1 className='mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-xl bg-slate-900 text-teal-500  w-fit
             sm:text-lg text-sm font-semibold'>
            {date}
          </h1>

        )}
        <h3 className='text-gray-200 text-xl sm:text-2xl font-medium group-hover:text-teal-400'>{role}</h3>
        <p className='text-gray-300 text-sm sm:text-base pt-3'>
         {description}
        </p>
       </div>
       </div>
    </div>
  )
}

export default ResumeCard
