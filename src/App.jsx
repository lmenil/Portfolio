// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return ( 
    <div className="App">
    <Router> 
      <div>

      <Layout/>
      {/* <Home/>
      <About/>
      <Projects/>
      <Services/>
      <Contact/> */}
        {/* <div className="content"> */}
          <Routes>
          
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            {/* <Route path="/about" element={<About />}</Route>
            <Route path="/projects" element={<Projects />}</Route>
            <Route path="/services" element={<Services />}</Route>
            <Route path="/contact" element={<Contact />}</Route> */}
          </Routes>
        {/* </div> */}
        {/* <Footer /> */}
      
      </div>
    </Router>
    </div>
  );
}

export default App;
