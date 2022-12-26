import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Home from "./components/Home"
import {Router,Routes, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const App = () => {
  const [page, setPage] = useState("home");
  const location = useLocation();
  return (
    
      <>

      <Nav />
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path ="/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/projects" element={<Projects/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path = "/resume" element ={<Resume/>}/>
      </Routes>
      </AnimatePresence>
      
    </>
    
  );
};

export default App;
