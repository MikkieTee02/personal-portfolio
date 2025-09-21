"use client";
import React from "react";
import { motion, stagger } from "motion/react";
import Typewriter from "typewriter-effect";
const header = {
  initial: { opacity: 1 },

  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      stagger: 0.08,
    },
  },
};

const singleWord = {
  initial: { opacity: 0, y: 50 },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const AnimatedText = ({ className = "" }: { className?: string }) => {
  return (
    <div className="w-full mx-auto py-2  ">
      <motion.h1
        className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold"
        variants={singleWord}
        initial="initial"
        animate="animate"
      >

        <div className="flex  ">
            I'M{" "}
        <span className="text-lightie">
          {" "}
          <Typewriter options={{
            strings:[
                "DEVELOPER",
                "UI/UX DESIGNER",
                "ARTIST",
                "KIDS INSTRUCTOR"
            ],
            autoStart:true,
            loop: true,
            delay: 100,
            deleteSpeed: 50,
            wrapperClassName:"pl-2"
          }} />
        </span>
        </div>
      
      
        <motion.span
          className="text-teal-500"
          variants={singleWord}
          initial="initial"
          animate="animate"
        >
          MIKAELA NYAMASOKA
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
