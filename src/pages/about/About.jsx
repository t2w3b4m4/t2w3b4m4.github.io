/* eslint-disable global-require */
/* eslint-disable max-len */
import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';
import { WEB_TITLE } from '../../components/appStrings';
import Contact from '../contact/Contact';
// import MA_ICON from '../../ma-flipped-transparent.png';
import './About.css';

function About() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.title = `${WEB_TITLE} | About`;
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="about">
      {/* <h3>What is 圖文並茂 (TWBM)?</h3>
      <div>
        圖(tú)文(wén)並(bìng)茂(mào) is a Chinese idiom that describes a situation where the text and visual elements of a piece of communication complement each other perfectly, both in quality and effect.
        Imagine a poem where the evocative imagery mirrors the emotions expressed in the verses, or a movie poster that captures the essence of the film&apos;s narrative in a single striking image.
        This harmonious interplay between text and visuals elevates the impact of the piece of work.
      </div> */}
      <br />
      <hr />
      <div>
        <br />
        Have fun.
        <br />
        <br />
        <span>
          -
          {' '}
          js
        </span>
      </div>
      <div className="bottom">
        <Contact />
      </div>
    </div>
  );
}

export default About;
