import React, {useState} from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

const App = () =>{
  const [page,setPage] = useState('about');

  console.log('page: ',page);

  return (
    <>
      <Nav page = {setPage} />
      { page == 'about' ? <About /> : <Projects />  }
      <Footer />
    </>
)}

export default App;