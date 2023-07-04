import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedinIn,faCodepen,faGithub,faStackOverflow } from '@fortawesome/free-brands-svg-icons';

//import Navbar from './navbar';
function header() {
  return (
    <div className="header" id='header'>
      <div className="container">
        <div className="header-content">
          <p className="intro">Hi,my name is</p>
          <h1 className="name" draggable='true' >
            <span className="letter">M</span>
            <span className="letter">i</span>
            <span className="letter">c</span>
            <span className="letter">h</span>
            <span className="letter">a</span>
            <span className="letter">e</span>
            <span className="letter">l</span>
            <span className="space"> </span>
            <span className="letter">N</span>
            <span className="letter">j</span>
            <span className="letter">u</span>
            <span className="letter">g</span>
            <span className="letter">u</span>
            <span className="letter">n</span>
            <span className="letter">a</span>
          <span className="letter">.</span>
          </h1>
          <h2 className="info-start">I build things for the web.</h2>
          <p className="info-main">I am a software engineer specializing in building and designing <br /> exceptional digital experiences.Currently, I am pursuing a degree <br /> in Math and Computer Science at <a href="https://www.mksu.ac.ke/">Machakos University</a>.</p>
          <a className="header-contact" href='#contact'>Contact me!</a>
          <ul className="media-links">
            <a href="https://www.linkedin.com/in/michael-njuguna/" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={ faLinkedinIn} /></a>
            <a href="https://github.com/michaelnjuguna" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub } /></a>
            <a href="https://stackoverflow.com/users/15384644/michael-njuguna" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={ faStackOverflow } /></a>
            <a href="https://www.youtube.com/channel/UCrVQe-jlmfmkLrDuCzAhtnQ" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={ faYoutube} /></a>
            <a href="https://codepen.io/michaelnjuguna" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={ faCodepen} /></a>
          </ul>
        </div>
     </div>
    </div>
  );
}

export default header;
