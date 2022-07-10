import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faLinkedinIn,
  faCodepen,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

function contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <h2>Let's make something phenomenal.</h2>
          <h1>Get In Touch.</h1>
          <p>
            I'm always looking for new opportunities. Just say hi, <br />
            my inbox is always open. I'll get back to you immediately.
          </p>
          <ul className="contact-info">
            <li>
              <a href="tel:+254796371360">
                <FontAwesomeIcon icon={faPhone} /> +254796371360
              </a>
            </li>
            <li>
              <a href="mailto:michaelnjuguna184@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                michaelnjuguna184@gmail.com
              </a>
            </li>
          </ul>
          <ul className="contact-icon">
            <li>
              {" "}
              <a
                href="https://www.linkedin.com/in/michael-njuguna-1216101b2/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://github.com/michaelnjuguna"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://stackoverflow.com/users/15384644/michael-njuguna"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faStackOverflow} />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.youtube.com/channel/UCrVQe-jlmfmkLrDuCzAhtnQ"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://codepen.io/michaelnjuguna"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faCodepen} />
              </a>
            </li>
          </ul>
          <a className="contact-btn" href="mailto:michaelnjuguna184@gmail.com">
            Say Hello
          </a>
        </div>
      </div>
    </div>
  );
}

export default contact;
