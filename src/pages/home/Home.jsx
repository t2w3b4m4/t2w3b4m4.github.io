/* eslint-disable global-require */
import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import { WEB_TITLE } from '../../components/appStrings';
import './Home.css';

function Home() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.title = `${WEB_TITLE}`;
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="home">
      {/* <h3 id="hello-world">Hello World!</h3> */}
      <div className="typewriter">
        <h3 id="hello-world">Hello World!</h3>
      </div>

      <div className="bottom">
        <Link
          to={routes.tools.path}
        >
          <span>⚙️</span>
        </Link>
        {' '}
        <Link
          to={routes.colors.path}
        >
          <span>⚙️</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
