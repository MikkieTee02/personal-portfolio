"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from "motion/react"

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href="/" className='w-10 h-10 text-slate-900 bg-teal-400 rounded-lg flex items-center justify-center flex-col text-xl font-bold'
      whileHover={{ 
        backgroundColor: ["#be2edd", "#7ed6df"," #badc58", "#130f40", "#be2edd"],
        transition: {duration:1, repeat: Infinity}
       }}
      >
      M
       
      </MotionLink>
    </div>
  )
}

export default Logo