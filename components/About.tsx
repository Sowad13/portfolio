import { MotionConfig } from 'framer-motion'
import React from 'react';
import { motion } from "framer-motion";
import aboutimg from "../images/input1.jpeg";
import Image from 'next/image'
import Link from 'next/link';


type Props = {}

function About({ }: Props) {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 justify-evenly mx-auto items-center overflow-hidden'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <div className='h-[70%] flex flex-col md:flex-row items-center bottom-0 justify-evenly'>
            <motion.img

                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.5
                }}

                whileInView={{
                    x: 0,
                    opacity: 1
                }}

                src="/dp2.jpg"
                className="-mb-20 md:mb-0 flex-shrink-0 w-0 h-0 rounded-full object-cover md:rounded-lg
                md:w-[250px] md:h-[250px] xl:w-[350px] xl:h-[350px]"
            />

            <div className='space-y-4 px-0 md:px-10 h-[75%]'>
                <h4 className='text-3xl font-semibold text-gray-500'>A little background</h4>
                <p className='text-base text-gray-500'>
                    Hello! This is MD Mejbah Ur Rahman Sowad. I am an adventurous guy who is always looking forward to new challenges in life.
                    I am a person who loves to deal with puzzles and maths and not really a fan of memorizing. I like to travel or watch anime during my leisure 
                    time. I am a fast learner and can adapt with people well. I believe that harwork wihtout effieciency is futile and one always has to be honest.
                    I like to smile and make people around me smile.
                </p>
                <Link href={"https://drive.google.com/file/d/1wA6mjKoQMJ7K99FRU2vr9hibc4hXB3gx/view?usp=sharing"}>
                    <button className='heroButton'>View Resume</button>
                </Link>
                <h4 className='text-2xl font-semibold text-gray-500'>Education</h4>
                <ul>
                    <li className='text-lg text-gray-500'>Ahsanullah University Of Science And Technology</li>
                    <li className='text-gray-500'>B Sc in Computer Science and Engineering</li>
                    <li className='text-gray-500'>2018-2022</li>
                </ul>
                
            </div>
            </div>

        </motion.div>
    )
}

export default About