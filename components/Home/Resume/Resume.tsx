import React from "react";
import ResumeCard from "./ResumeCard";
import { FaChild, FaCodepen, FaReact, FaSchool } from "react-icons/fa";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] max-w-7xl  mx-auto grid grid-cols-1  lg:grid-cols-2 gap-10">
        {/*Work part*/}
        <div>
          <h2 className="text-teal-400 text-center text-xl md:text-3xl xl:text-4xl font-medium mb-4">
            Work <span>Experience</span>
          </h2>

          {/*underline*/}

          <div
            className="mx-auto h-1 w-40 flex rounded-md"
            aria-hidden="true"
          >
            <div className="w-1/4 bg-gray-700 "></div>
            <div className="w-1/2 bg-yellow-400"></div>
            <div className="w-1/4 bg-gray-700"></div>
          </div>
          <div className="mt-10">
            <ResumeCard
              Icon={FaCodepen}
              role="Volunteer instructor"
              description="I am part of a team of volunteer instructors who teach kids how to code through Scratch platform. We also volunteer for environmental clean up and exam invigilation in schools"
            />

            <ResumeCard
              Icon={FaReact}
              role="Tie and Dye"
              description="I made custom tie and dye t-shirts from scratch. I explored my creative side and enjoyed my work. I made sure my clients were satisfied with my products"
            />

            <ResumeCard
              Icon={FaCodepen}
              role="Creative Director"
              description="I manage the company's work and make sure they meet clients' needs.  This includes the UI design, graphic design, web design departments"
            />

            <ResumeCard
              Icon={FaCodepen}
              role="Nationwide volunteer"
              description="I volunteer at church, through contributing to the local design comittee. This included plumbing and helping at constructions"
            />
          </div>
        </div>
        {/*Education part*/}
        <div>
          <h2 className="text-teal-400 text-center text-xl md:text-3xl xl:text-4xl font-medium mb-4">
            Academic <span>Background</span>
          </h2>
          {/*underline*/}

          <div
            className="mx-auto h-1 w-40 flex rounded-md"
            aria-hidden="true"
          >
            <div className="w-1/4 bg-gray-700 "></div>
            <div className="w-1/2 bg-yellow-400"></div>
            <div className="w-1/4 bg-gray-700"></div>
          </div>
          <div className="mt-10">
            <ResumeCard
              Icon={FaSchool}
              role="Advanced Level"
              date="2018-2019"
              description="3 passes in all Science subjects"
            />

            <ResumeCard
              Icon={BiBadge}
              role=" Hexco Certificate in Art and Design"
              date="2021-2022"
              description="Pass in all modules"
            />

            <ResumeCard
              Icon={FaCodepen}
              role="Software development, Design and Digital marketing"
              date=" Nov 2024-present"
              description="Iorem ipsum"
            />

            <ResumeCard
              Icon={FaChild}
              role="Kids Instructor"
              date=" Jan 2025-present"
              description="I am part of a team of volunteer instructors who teach kids how to code through Scratch platform. We also volunteer for environmental clean up and exam invigilation in schools"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
