import React from 'react'
import Hero from './Hero/Hero'
import Service from './Services/Service'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Reviews from './Reviews/Reviews'
import Contact from './Contact/Contact'
import ScrollToTop from './ScrollToTop'
import About from './About/About'

const Home = () => {
  return (
     <div className='overflow-hidden'>
      <section id="hero">
        <Hero />
      </section>

        <section id="about">
        <About/>
      </section>

      <section id="services">
        <Service />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="reviews">
        <Reviews />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <ScrollToTop />
    </div>
  )
}

export default Home
