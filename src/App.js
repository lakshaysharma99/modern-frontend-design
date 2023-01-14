import React from 'react'
import { Footer,Blog, Possibiity, Features, WhatGPT3, Header  } from './containers'
import { Cta, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibiity />
      <Cta />
      <Blog />
      <Footer />
    </div>
   
  )
}

export default App
