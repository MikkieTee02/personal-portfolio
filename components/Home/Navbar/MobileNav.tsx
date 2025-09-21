import { NavLinks } from '@/constant/constant'
import { label } from 'motion/react-client'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'


type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({closeNav, showNav}:Props) => {


  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";
  
  return (
    <div>
     {/*overlay*/}
    
        {/*navlinks*/}
        <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform
        transitison-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-teal-800 space-y-6 z-[100050] right-0`}>
          {NavLinks.map((link)=>{
              return(
                <Link key={link.id} href={link.url}>
                 <p className=' mobile-nav text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-lightie sm:text-[30px]'>{link.label}</p>
                </Link>
              )
          })}

            {/*close button*/}
         <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6'/>
        </div>
 
         
    </div>
  )
}

export default MobileNav
