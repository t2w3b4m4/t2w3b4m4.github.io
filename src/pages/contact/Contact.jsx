/* eslint-disable global-require */
import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';
import './Contact.css';
import MailIcon from './email-icon.png';

function Contact() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="contact">
      Hi there, if you have feedback, inquiry,
      {' '}
      <br />
      or, if you just want to say what&apos;s up,
      {' '}
      <br />
      feel free to
      {' '}
      <a
        href="mailto:twbm.site&#64;gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="anchorHoverNoEffect"
      >
        email me
        {' '}
        <span className="in-text-icon">
          <img alt="email" src={MailIcon} className="email-icon" />
        </span>
      </a>
      <br />
      <br />
      - mjs
    </div>
  );
}

export default Contact;
