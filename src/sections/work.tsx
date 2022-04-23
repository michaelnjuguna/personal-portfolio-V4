import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {   faUpRightFromSquare  } from '@fortawesome/free-solid-svg-icons'
// main work cards
function Card(props: any) { 
  return (
    <div className="main-work__card">
      <img src={props.src} alt={ props.alt} />
      <h1 className="title">{ props.title.toUpperCase() }.</h1>
      <h2 className="description">{props.description}.</h2>
      <div className="main-work__links">
    <a href={props.site} target='_blank' rel='noreferrer' className="site-link">VISIT SITE</a>
        <a href={props.github} target='_blank' rel='noreferrer' className="github-link">GITHUB LINK</a>
        </div>
  </div>
  )
  
}
// sub work cards
function SubCard(props: any) { 
  return (
    <div className="sub-work__card">
              <div className="links">
        <a href={props.github} target='_blank' rel='noreferrer'className="github"><FontAwesomeIcon icon={faGithub} /></a>
        <a href={props.externalLink} target='_blank' rel='noreferrer' className="external-link"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
        <h1>{ props.title.toUpperCase()}.</h1>
        <p>{ props.description}.</p>
              </div>
            </div>
)
}
function Work() {
  return (
    <div className="work" id="work">
      <div className="container">
        <div className="work-content">
          <h1 className="about-header">Some Things I've Built.</h1>
          <div className="main-work">
           <Card src='img2.PNG' alt='VENDING MACHINES MANUFACTURER' title='vendor machine manufacturer' description='I built this project for my brother who had started a business of selling vending machines' site='https://vendingmachinemanufactures.netlify.app/' github='https://github.com/michaelnjuguna/Vendor-machine-manufactures'/>
            <Card src='img3.PNG' alt='legit Movers' title='legit movers limited' description='This website is for a movers company' site='https://legit-movers-group.netlify.app/' github='https://github.com/michaelnjuguna/legit-movers' />
            <Card src='img4.PNG' alt='Peter Chege' title='Peter chege' description='A personal portfolio for Peter Chege' site='http://peter-chege.netlify.app/#top-header' github='https://github.com/michaelnjuguna/chege-personal-portfolio'/>
          </div>
          <h2 className="about-sub__header">
            Other Noteworthy Projects.
          </h2>
          <div className="sub-work">
            <SubCard github='https://github.com/michaelnjuguna/personal-portfolio-v1' externalLink='https://web-development-by-michael.netlify.app/' title='Personal Portfolio V1' description='My first personal portfolio when I was learning HTML,CSS and Bootstrap' />
            <SubCard github='https://github.com/michaelnjuguna/personal-portfolio-v2' externalLink='https://mike-njuguna.netlify.app/' title='Personal Portfolio V2' description='My second personal portfolio' />
            <SubCard github='https://github.com/michaelnjuguna/personal-portfolio-v3' externalLink='https://michael-njuguna.netlify.app/' title='Personal Portfolio V3' description='My Third personal portfolio' />
          </div>
          <h3 className="about-work">Contact me to see more relevant projects.</h3>
        </div>
      </div>
    </div>
  );
}

export default Work;
