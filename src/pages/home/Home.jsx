import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';
import './Home.css';

function Home() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="home">
      <div className="typewriter">
        <h3 id="hello-world">&gt; Hello World!</h3>
      </div>
    </div>
  );
}

export default Home;
