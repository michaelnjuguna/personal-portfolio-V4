import React from 'react';

function navbar() {
  function changeHambuger() {
    const smallNav = document.querySelector('.sm-navbar__items') as HTMLElement; 
    const stickOne = document.querySelector('.stick-1') as HTMLElement;
    const stickTwo = document.querySelector('.stick-2') as HTMLElement;
    const stickThree = document.querySelector('.stick-3') as HTMLElement;
    stickOne.classList.toggle('stick-1__anim');
    stickTwo.classList.toggle('stick-2__anim');
    stickThree.classList.toggle('stick-3__anim');
    smallNav.classList.toggle('display-nav');
  }
  function closeNavbar() { 
    changeHambuger();

  }
  return (
    <section className="navigation-bar">
    <div className="navbar">
      <div className="container">
        <div className="lg-navbar__items">
          {/* brand */}
          <div className="navbar-brand" draggable="true">
            <div className="logo-borders">
              <div className="d-1"></div>
              <div className="d-2"></div><br />
              <div className="d-3"></div>
              <div className="d-4"></div>
            </div>
              <p className="brand-name">M</p>
          </div>
          <ul className="navbar-links">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="https://medium.com/@michaelnjuguna184" target="_blank" rel="noreferrer">Blog </a></li> 
          </ul>
        <a href="michael njuguna CV.pdf" download='michael njuguna cv'><button className="navbar-btn">Download CV</button></a>
          <button className="hambuger" onClick={changeHambuger}>
            <div className="stick stick-1"></div>
            <div className="stick stick-2"></div>
            <div className="stick stick-3"></div>
          </button>
        </div>

      </div>
      </div>
      <div className="sm-navbar__items">
          <ul className="navbar-links">
             <li><a href="#header" onClick={closeNavbar}>Home</a></li>
             <li><a href="#about" onClick={closeNavbar}>About</a></li> 
			       <li><a href="#work" onClick={closeNavbar}>Work </a></li>
			       <li><a href="https://medium.com/@michaelnjuguna184" target="_blank" rel="noreferrer" onClick={closeNavbar}>Blog </a></li> 

          </ul>
         <a href="michael njuguna CV.pdf" download='michael njuguna cv'> <button className="navbar-btn">Download CV</button></a>
        </div>
      </section>
  );
}

export default navbar;
