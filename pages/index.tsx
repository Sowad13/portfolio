import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Education from '../components/Education';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(17,32,51)] text-white h-screen snap-y snap-mandatory
    overflow-scroll overflow-x-hidden z-0 scrollbar scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white'>
      <Head>
        <title>Sowad Portfolio</title>
        
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Hero/>
      </section>

      <section id='about' className='snap-center'>
        <About/>
      </section>

      <section id="education" className='snap-center'>
        <Education />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

    </div>
  )
}

export default Home;
