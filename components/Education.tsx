import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";

type Props = {};

function Education({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
        max-w-full px-10 justify-evenly mx-auto items-center space-y-10"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white justify-evenly">
        <article
          className="flex flex-col rounded-lg items-center
        space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[750px] snap-center
        bg-[#162840] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity
        duration-200 overflow-hidden"
        >
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center bg-white"
            src="/loox.png"
            alt=""
          />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-bold">LOOX</h4>
            <p className="font-semibold text-2xl mt-1">Junior software Engineer</p>
            <p className="py-5 text-gray-300">
              Started: NOV 2021  -  Ended: MARCH 2022
            </p>
          </div>
        </article>
        
        <article
          className="flex flex-col rounded-lg items-center
        space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[750px] snap-center
        bg-[#162840] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity
        duration-200 overflow-hidden"
        >
          {/* <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain object-center bg-white"
            src="https://loox.com.bd/loox-logo.png"
            alt=""
          /> */}

          <div className="px-0 md:px-10 animate-pulse">
            <h4 className="text-5xl font-bold p-20">COMING SOON . . .</h4>
            
          </div>
        </article>

      </div>
    </motion.div>
  );
}

export default Education;
