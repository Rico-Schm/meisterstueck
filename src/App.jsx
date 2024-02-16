import { useState } from 'react';
import Start from './components/Start';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <section id="wrapper" className='snap-y snap-mandatory'>
    <Start />
    <About />
    <Contact />
    <Footer />
    </section>
  );
}

export default App;