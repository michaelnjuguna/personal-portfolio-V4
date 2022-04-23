import React from 'react';
import './App.scss';
// sections
import Navbar from './sections/navbar';
import Header from './sections/header';
import About from './sections/about';
import Contact from './sections/contact';
import Footer from './sections/footer';
import Work from './sections/work';
function App() {
  return ( 
    <div className="app">
      <Navbar/>
      <Header />
      <About />
      <Work />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
