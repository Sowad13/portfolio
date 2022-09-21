import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import image from "../images/180104034-Sowad.jpg"
import Link from 'next/link';

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi!",
            "This is MD Mejbah Ur Rahman Sowad"
        ],
        // loop: true,
        delaySpeed: 2000,
    });
    const [text2, count2] = useTypewriter({
        words: [
            "Gaming",
            "Watching Anime",
            "Solving Puzzles",
            "<CODING/>"
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center 
        justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={image}
                height={200}
                width={200}
                alt={""}
            />
            <div className='z-20'>
                <h3 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Technology Enthusiast</h3>
                <h1 className='pb-2 text-3xl lg:text-4xl font-semibold px-10 text-white'>
                    <span>{text}</span>
                    <Cursor cursorColor='red' />
                </h1>
                <h2 className='text-2xl pb-4'>
                    Guy who likes
                    <span className='text-white font-semibold'> {text2}</span>
                    <Cursor cursorColor='red' />
                </h2>

                <div className='pt-3'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>

                    <Link href={"#education"}>
                        <button className='heroButton'>Experience</button>
                    </Link>

                    <Link href={"#skills"}>
                        <button className='heroButton'>Skills</button>
                    </Link>

                    <Link href={"#projects"}>
                        <button className='heroButton'>Projects</button>
                    </Link>

                </div>
            </div>

        </div>
    )
}