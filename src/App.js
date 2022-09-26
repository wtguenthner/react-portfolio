import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const App = () => {
  const [page, setPage] = useState("about");

  console.log("page: ", page);

  return (
    <>
      <Nav page={setPage} />
      {page == "about" ? (
        <About />
      ) : page == "projects" ? (
        <Projects />
      ) : page == "resume" ? (
        <Resume />
      ) : (
        <Contact />
      )}
      <Footer />
    </>
  );
};

export default App;
