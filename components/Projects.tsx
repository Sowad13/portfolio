import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import Link from "next/link";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3];
const projectNames = ["Temployee", "HOPE", "Transport Management System"];
  const projectDes = ["A freelancing website, especially for freshers. Using Temployee an organisation can also hire people to complete tasks. The website is developed with react and ASP .NET",
  "An android app build to help the mentally challenged or depressed people. It is designed to reduce the mental stress of a person to make their life easier. It was developed with java and firebase using android studio.",
  "A database management system built to keep records of vehicles and staff. The audience of the system are the transportation companies. MongoDB was used as the database and it was developed in intellij."
]
const projectLink = ["https://github.com/tashfiq333/Temployee","https://github.com/Sowad13/Hope", "https://github.com/Sowad13/Transport"]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-left md:flex-row max-w-full
        justify-evenly mx-auto items-center overflow-hidden z-0"
    >
      <h4 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h4>

      <div
        className="absolute top-[10%] w-full flex overflow-x-scroll overflow-y-hidden
            snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#112033]"
      >
        {projects.map((project, i) => (
          //eslint-disable-next-line react/jsx-key
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col
                    space-y-5 items-center justify-center p-10 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="w-0 h-0 sm:h-[120px] sm:w-[220px] md:w-[250px] md:h-[150px]"
              src="/laptop.png"
              alt=""
            />

            <div className="space-y-5 px-0 md:px-5 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                Project {i + 1} of {projects.length}: {projectNames[i]}
              </h4>
              <p className="text-lg text-center md:text-left">
                {projectDes[i]}
              </p>

              <Link href={projectLink[i]}>
              <button className="heroButton border border-white text-[white] bg-[#112033]">Github</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-full absolute top-[30%] bg-[#607EAA] left-0 h-[500px]
        -skew-y-12"
      ></div>
    </motion.div>
  );
}

export default Projects;
