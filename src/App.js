import './App.css';
import Hero from './components/jsx/hero';
import About from './components/jsx/about';
import Works from './components/jsx/works';
import Technologies from './components/jsx/technologies';
import Contact from './components/jsx/contact';
import { Element, scroller, Link } from "react-scroll";
import React, {createContext, useContext, useRef} from 'react';

const context = createContext();

function App() {

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='AppSection'>
      <context.Provider value={{scrollToSection}}>

      <section id='home'>
        <Hero/>
      </section>

      <section id='about'>
        <About/>
      </section>

      <section id='works'>
        <Works/>
      </section>

      <section id='technologies'>
        <Technologies/>
      </section>

      <section id='contact'>
        <Contact/>
      </section>
    
        </context.Provider>
    </div>
  );
}

export default App;
export {context};