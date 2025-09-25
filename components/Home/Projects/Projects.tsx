import React from "react";
import { motion } from "motion/react";
import { article } from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "Website Development",
    category: "Frontend",
    image: "/images/chamabondo.png",
    technologies: ["React", "JavaScript", "Tailwind"],
    description: "Description of project 1",
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
  },
  {
    title: "Blog app",
    category: "Frontend and Backend",
    image: "/images/project.png",
    technologies: ["Next J.S", "Tailwind", "MongoDB", "Typescript"],
    description: "Description of project 2",
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
  },
  {
    title: "Mobile App",
    category: "Mobile",
    image: "/images/chamabondo.png",
    technologies: ["Tailwind", "Javascript"],
    description: "Description of project 3",
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
  },
];

const Projects = () => {
  return (
    <div className="py-16 mx-auto max-w-7xl px-4  ">
      <h2 className="text-center text-teal-400  text-xl md:text-3xl xl:text-4xl font-medium mb-4">
        Featured Projects
      </h2>

      {/*underline*/}

      <div
        className="mx-auto h-1 w-40 flex rounded-md mb-10"
        aria-hidden="true"
      >
        <div className="w-1/4 bg-gray-700 "></div>
        <div className="w-1/2 bg-yellow-400"></div>
        <div className="w-1/4 bg-gray-700"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {projectsData.map((project) => (
          <article
            key={project.title}
            className="mb-10 bg-slate-800 shadow-md p-6 rounded-lg"
          >
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw 33vw"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2 text-white">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-700 text-teal-400 rounded-full text-sm "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-2">
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-gray-400   hover:text-teal-400 transition-colors"
              >
                <FaGithub className="w-5 h-5" /> <span>Code</span>
              </Link>

              <Link
                href={project.demoLink}
                target="_blank"
                className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition-colors"
              >
                <FaExternalLinkAlt className="w-5 h-5" /> <span>Live Demo</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
