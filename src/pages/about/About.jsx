/* eslint-disable max-len */
import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';
import { WEB_TITLE } from '../../components/appStrings';
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
      <h3>
        What is this?
      </h3>
      <div>
        It is a collection of a variety of things that I see beauty in: things I saw, experienced, owned, and created; and things that have story and meaning to me. Though part of the collections may be abstract and conceptual, they are all pieces of materialized memories that I find beautiful, and I wanted to share them in the hope that they can provide inspiration, comfort, or whatever positive energy the audiences perceive.
      </div>
      <h3>What is 圖文並茂?</h3>
      <div>
        圖(tú)文(wén)並(bìng)茂(mào) (
        <i>twbm</i>
        {' '}
        for short) is an idiom in Chinese, and it means the text and visual contents are complementing each other well and both are excellent. I see my collection of works as 圖文並茂, hence the title.
      </div>
      <h3>What to expect?</h3>
      <div>
        We will be exploring materialism, symbolism, stories, and more. Materialism, in the context of the book, and in a greater scope of philosophy to me, is the idea that all physical objects/matters are intrinsically rational, and their manifestation of emotions were created by the subjectivity of emotional beings, i.e. us humans.
      </div>
      <div>
        <br />
        Have fun.
        <br />
        <br />
        -
        {' '}
        <span className="inline-block horizontal-flip">馬</span>
        js
      </div>
    </div>
  );
}

export default About;
