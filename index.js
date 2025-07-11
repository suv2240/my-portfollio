import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Header';
import Hero from './src/Hero';
import Footer from './src/Footer';
import Skills from './src/Skills';
import Project from './src/Project';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Header/>
      <Hero/>
      <Skills/>
      <Project/>
      <Footer/>
    </React.StrictMode>
);