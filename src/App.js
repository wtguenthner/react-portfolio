import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Home from "./components/Home"
const App = () => {
  const [page, setPage] = useState("home");

  return (
    
      <>
      <Nav page={setPage}/>
      
      {page === "home" ? (
        <Home />
      ):
      page === "about" ? (
        <About />
      ) : page === "projects" ? (
        <Projects />
      ) : page === "resume" ? (
        <Resume />
      ) : (
        <Contact />
      )}
      {/* <Footer /> */}
    </>
    
  );
};

export default App;
