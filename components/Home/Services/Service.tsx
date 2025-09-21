import React from "react";
import { motion } from "motion/react";
import Card from "./Card";
import { PencilOff, ZapIcon, LayoutPanelTop, Palette, Code } from "lucide-react";




const Service = () => {
  return (
    <div className="pt-16 pb-16">
      <h2 className="  text-teal-400 text-center text-xl md:text-3xl xl:text-4xl font-medium mb-4 relative z-10">My Services</h2>
       
       {/*underline*/}

       <div
        className="absolute left-1/2  transform -translate-x-1/2 h-1 w-40 flex z-0 rounded-md"
        aria-hidden="true"
      >
        
        <div className="w-1/4 bg-gray-700 "></div>
        <div className="w-1/2 bg-yellow-300"></div>
         <div className="w-1/4 bg-gray-700"></div>
      </div>

      <div className="w-[95%] max-w-7xl mx-auto  grid text-center  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 
      items-center">
        <div>
            <Card icon={ <LayoutPanelTop />}
              name="Website developer "
             description="Desiging beautiful interfaces that are visually appealing." 
             />
        </div>

        <div>
            <Card icon= {<Code />}
              name="Web and Mobile app "
             description="Desiging beautiful interfaces that are visually appealing." 
             />
        </div>

        <div>
            <Card icon={ <PencilOff/>}
              name="UI AND UX "
             description="Desiging beautiful interfaces that are visually appealing." 
             />
        </div>

        <div>
            <Card icon={<Palette />}
              name="Art and Design "
             description="Desiging beautiful interfaces that are visually appealing." 
             />
        </div>
      </div>
    </div>
  );
};

export default Service;
