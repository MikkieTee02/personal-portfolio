"use client"
import React from 'react'
import { SiBootstrap, SiCss3, SiFigma, SiHtml5, SiJavascript, SiNextdotjs, SiPostgresql, SiReact, SiSass, SiTailwindcss } from 'react-icons/si'
import Tilt from 'react-parallax-tilt';


const skillsData = [
    {   id:1,
        name: "JavaScript",
        icon: <SiJavascript/>,
        percentage: 89,
    },

      {
         id:2,
        name: "React Js",
        icon: <SiReact/>,
        percentage: 88,
    },


      {
         id:3,
        name: "Next Js",
        icon: <SiNextdotjs/>,
        percentage: 77,
    },


      {
         id:4,
        name: "Tailwind CSS",
        icon: <SiTailwindcss/>,
        percentage: 95,
    },


      {
         id:5,
        name: "Bootstrap",
        icon: <SiBootstrap/>,
        percentage: 92,
    },


      {
         id:6,
        name: "Sass",
        icon: <SiSass/>,
        percentage: 96,
    },


       {
         id:7,
        name: "CSS",
        icon: <SiCss3/>,
        percentage: 96,
    },

    
       {
         id:8,
        name: "Figma",
        icon: <SiFigma/>,
        percentage: 90,
    },

      {
         id:9,
        name: "HTML",
        icon: <SiHtml5/>,
        percentage: 60,
    },

    
       {
         id:10,
        name: "Postgres SQL",
        icon: <SiPostgresql/>,
        percentage: 60,
    },


       {
         id:11,
        name: "MongoDB",
        icon: <SiPostgresql/>,
        percentage: 60,
    },

]
const Skills = () => {
  return (
    <div className='text-white pt-16 pb-16'>
     <h2 className="text-teal-400 text-center text-xl md:text-3xl xl:text-4xl font-medium mb-4">My Skills</h2>
       {/*underline*/}

       <div
        className="absolute left-1/2  transform -translate-x-1/2 h-1 w-40 flex z-0 rounded-md"
        aria-hidden="true"
      >
        
        <div className="w-1/4 bg-gray-700 "></div>
        <div className="w-1/2 bg-yellow-400"></div>
         <div className="w-1/4 bg-gray-700"></div>
      </div>
     <div className='flex flex-wrap justify-center gap-6 mt-16 max-w-7xl mx-auto'>
      {skillsData.map((skill)=>{
         return <Tilt key= {skill.id} scale={1.15} transitionSpeed={400}>
           <div className='bg-slate-900 text-center w-70 h-48 rounded-2xl flex flex-col items-center justify-center
           shadow-lg transition hover:scale-105'>
            <div className='text-5xl mb-4 text-gray-400 hover:text-teal-400'>{skill.icon}</div>
            <p className='text-2xl font-semibold'>{skill.percentage}%</p>
            <p className='text-teal-400 mt-1'>{skill.name}</p>
           </div>
         </Tilt>
      })}
     </div>
    </div>
  )
}

export default Skills
