import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './Header/Header';
import Home from './Home/Home';

import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Footer from './Footer/Footer';
import NotFound from './NotFound/NotFound';

export const App = props => {
  return (
    <div className="app_wrapper">
      <Header />
      {/* <Home/> */}
      

      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer/>
    </div>
  );
};
