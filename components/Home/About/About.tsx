"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { User, Code, Palette, Heart } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const About = () => {
  return (
    <div className="pt-20 pb-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text */}
        <motion.div variants={fadeInUp} className="text-left">
          <h2 className="text-teal-400 text-center lg:text-left text-xl md:text-3xl xl:text-4xl font-medium mb-4">
            About Me
          </h2>

          {/*underline*/}
          <div className="mx-auto lg:mx-0 h-1 w-40 flex rounded-md mb-8">
            <div className="w-1/4 bg-gray-700"></div>
            <div className="w-1/2 bg-teal-500"></div>
            <div className="w-1/4 bg-gray-700"></div>
          </div>

          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Hi, I'm Mikaela Nyamasoka, a passionate full-stack developer, designer, and community advocate.
            With expertise in modern web technologies, I create responsive, user-friendly applications that
            combine technical excellence with creative design.
          </p>

          <p className="text-gray-400 text-base mb-8 leading-relaxed">
            My journey spans software development, graphic design, and digital marketing. I'm committed to
            continuous learning and giving back to the community through volunteering, including teaching
            coding to kids and environmental initiatives.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <Code className="w-8 h-8 text-teal-400 mb-2" />
              <h3 className="text-white font-semibold">Development</h3>
              <p className="text-gray-400 text-sm">Full-stack expertise</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <Palette className="w-8 h-8 text-teal-400 mb-2" />
              <h3 className="text-white font-semibold">Design</h3>
              <p className="text-gray-400 text-sm">Creative solutions</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <Heart className="w-8 h-8 text-teal-400 mb-2" />
              <h3 className="text-white font-semibold">Community</h3>
              <p className="text-gray-400 text-sm">Volunteer work</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <User className="w-8 h-8 text-teal-400 mb-2" />
              <h3 className="text-white font-semibold">Innovation</h3>
              <p className="text-gray-400 text-sm">Modern approaches</p>
            </div>
          </div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-purple-600 rounded-2xl blur-2xl opacity-60 animate-pulse"></div>
            <div className="relative z-10 w-full h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/Mikaela.svg"
                alt="Mikaela Nyamasoka"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
