"use client"

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import {
  Code,
  Palette,
  Smartphone,
  Database,
  Globe,
  Zap,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star,
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { div } from "motion/react-client";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Hero = () => {
  return (
    <main className="relative pt-24 pb-16 mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 flex items-center min-h-screen text-lightie">
      
      {/*Particles code*/}
        <div className=" grid grid-cols-1 sm:grid-cols-2  w-full">
                {/*Left side*/}
          <div className="text-left">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                <span className=" pulse-txt text-sm sm:text-lg text-teal-400">Hey There</span>
              </div>
            </motion.div>
            <AnimatedText />
            <p className=" text-gray-400 text-lg max-w-lg">
              Specializing in front-end and back-end development, I create
              modern, responsive websites and web applications that deliver
              exceptional user experiences and drive business growth.
            </p>

            {/*Icons*/}
            <div>Icons</div>

            {/*Button*/}
            <div className="flex items-center self-start mt-2">
              <Link href="images/Mikaela-Resume.pdf" target={"_blank"}
               className="flex items-center bg-teal-400 text-slate-900 p-2.5 px-6 rounded-xl text-base font-semibold hover:bg-purple-400
                hover:text-dark  border-solid border-transparent hover:border-dark border-2 transition-all duration-300"
                download={true}
              >
                Resume <ArrowUpRight className="w-5"/>
              </Link>
              {/*<Link href="mailto:mikaelanyamasoka@gmail.com" target={"_blank"}
               className="ml-4 text-base font-medium capitalize text-dark underline"
              >
                Contact
              </Link>*/}
            </div>
          </div>
          <div className="w-full sm:pl-20">
            {/*<HeroAnimation/>*/}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute  inset-0 bg-gradient-to-r from-teal-300 to-purple-600 rounded-2xl blur-2xl opacity-60 animate-pulse"></div>
                <div className="relative z-10 w-full  h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/Mikaela.svg"
                    alt="Mikaela Nyamasoka"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                </div>

                {/* Floating cards */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute z-20 -right-4 top-8 bg-slate-800 p-4 rounded-lg border border-slate-700"
                >
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-teal-400" />
                    <span className="text-sm text-light">Best Experience</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    delay: 1.5,
                  }}
                  className="absolute z-20 -left-4 bottom-8 bg-slate-800 p-4 rounded-lg border border-slate-700"
                >
                  <div className="flex items-center space-x-2">
                    <Code className="w-4 h-4 text-teal-400" />
                    <span className="text-sm  text-light">Best Experience</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      
    </main>
  );
};

export default Hero;
