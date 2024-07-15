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
      {/* <h3>
        What is this?
      </h3>
      <div>
        This is 圖文並茂, but more on this later. Superficially, this is a little collection of selected cherishable snippets of my past life—mementos of sights seen and things I created. I&apos;m sharing them with you, hoping they might spark a memory, maybe even light a creative fire in you. Whatever it is, if it makes you feel a little lighter or inspired, then that&apos;s my magic trick.
      </div> */}
      <h3>What is 圖文並茂 (TWBM)?</h3>
      <div>
        圖(tú)文(wén)並(bìng)茂(mào) is a Chinese idiom that describes a situation where the text and visual elements of a piece of communication complement each other perfectly, both in quality and effect.
        Imagine a poem where the evocative imagery mirrors the emotions expressed in the verses, or a movie poster that captures the essence of the film&apos;s narrative in a single striking image.
        This harmonious interplay between text and visuals elevates the impact of the piece of work.
        {/* <br />
        I use the term
        {' '}
        <i>TWBM</i>
        {' '}
        as a concept to infuse each piece in my collection with its essence, hoping they can transcend their individual components.
        {' '}
        {' '}
        <i>TWBM</i>
        , to me, as a concept, isn&apos;t merely text or visuals; it&apos;s a fusion where words spark vivid mental images, while visuals echo the narrative&apos;s emotional depth. */}
      </div>
      <br />
      <hr />
      <Contact />
      <div>
        <br />
        Have fun.
        <br />
        <br />
        <span>
          -
          {' '}
          {/* <span className="in-text-icon">
            <img
              src={MA_ICON}
              alt="馬"
              width="20px"
            />
          </span> */}
          JS
        </span>
      </div>
    </div>
  );
}

export default About;
