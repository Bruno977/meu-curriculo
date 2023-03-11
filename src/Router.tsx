import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import { AnimatePresence } from 'framer-motion';
import Contact from './pages/contact';

function Router() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/meu-curriculo" element={<Home />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default Router;
