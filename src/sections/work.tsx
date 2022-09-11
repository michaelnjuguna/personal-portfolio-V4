import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {   faUpRightFromSquare  } from '@fortawesome/free-solid-svg-icons'
// main work cards
function Card(props: any) { 
  return (
    <div className="main-work__card">
      <img loading="lazy" src={props.src} alt={ props.alt} />
      <h1 className="title">{ props.title.toUpperCase() }.</h1>
      <h2 className="description">{props.description}.</h2>
      <div className="main-work__links">
    <a href={props.site} target='_blank' rel='noreferrer' className="site-link">Check It Out</a>
        <a href={props.github} target='_blank' rel='noreferrer' className="github-link">Github Link</a>
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
            <Card src='img3.PNG' alt='legit Movers' title='legit movers limited' description='This business website is for a movers company' site='https://legit-movers-group.netlify.app/' github='https://github.com/michaelnjuguna/legit-movers' />
            <Card src='img4.jpg' alt='Machakos Uni students App' title='Machakos Uni students App' description='An app for Machakos university students' site='https://play.google.com/store/apps/details?id=com.michael.machakos' github='https://github.com/michaelnjuguna/Machakos-university-app'/>
          </div>
          <h2 className="about-sub__header">
            Other Noteworthy Projects.
          </h2>
          <div className="sub-work">
            <SubCard github='https://github.com/michaelnjuguna/chege-personal-portfolio' externalLink='http://peter-chege.netlify.app/#top-header' title='Chege Portfolio' description='A personal portfolio for Peter Chege' />
            <SubCard github='https://github.com/michaelnjuguna/swahili-bootstrap' externalLink='https://github.com/michaelnjuguna/swahili-bootstrap' title='Swahili-Bootstrap' description='A Swahili version of the popular Bootstrap UI framework from Twitter' />
            <SubCard github='https://github.com/michaelnjuguna/All-swahili-words-dictionary' externalLink='https://github.com/michaelnjuguna/All-swahili-words-dictionary' title='All-swahili-words-dictionary' description='A text file containing all Swahili words' />
          </div>
          <h3 className="about-work">Check out all my code and projects <a href="https://github.com/michaelnjuguna?tab=repositories" target="_blank" rel="noreferrer">here</a> .</h3>
           <h3 className="about-work">Check out all my mobile apps  <a href="https://play.google.com/store/apps/developer?id=michael+njuguna" target="_blank" rel="noreferrer">here</a> .</h3>
          
        </div>
      </div>
    </div>
  );
}

export default Work;
