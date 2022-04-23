import React from 'react';

function about() {
  return (
    <div className="about" id='about'>
      <div className="container">
        <div className="about-content">
        <div className="about-img">
          <img src="img1.jpg" alt="michael njuguna" />
        </div>
        <div className="about-info">
          <h1 className="about-header">About Me. </h1>
          <h2 className="about-title">I am a web developer based in Kenya.</h2>
          <p className="about-paragraph">
              Hello! My name is Mike and I have a passion for creating things that live on the Internet.My interest in software development started back in 2019 when I started learning C programming language. <br /> 
              Fast-forward to today and I've had the privilege of building various products for my  clients.My main focus these days is building accessible,inclusive and human centered applications.
          </p>
          <a className="about-btn" href='michael njuguna CV.pdf'>Download CV</a> 
        </div>
        </div>
        </div>
    </div>
  );
}

export default about;
