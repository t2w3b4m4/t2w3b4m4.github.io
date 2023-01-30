import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';
import {
  HashRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import routes from './routes';
import './styles/App.css';
import NotFound from './pages/404';
import NavigationBar from './components/NavigationBar';

const APP_HTML_ELEMENT_ID = 'app-id';

function App() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);

  // const handleBackToTop = () => {
  //   // eslint-disable-next-line no-undef
  //   document.getElementById(APP_HTML_ELEMENT_ID).scrollIntoView();
  // };

  return (
    <div className="App" id={APP_HTML_ELEMENT_ID}>

      <Router>
        <div className="navigation">
          <div className="logo not-selectable"><Link to="/"><img src="/ma-flipped-transparent.png" alt="馬" width={48} /></Link></div>
          <NavigationBar className="not-selectable" />
        </div>
        <div className="app-content">
          <Switch>
            {Object.values(routes).map((r) => (
              <Route
                exact={r.path === '/'}
                path={r.path}
                component={r.component}
                key={r.name}
              />
            ))}
            <Route exact path="/not-found">
              <NotFound />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        {/* <div className="footer">
          <button
            type="button"
            className="back-to-top-button"
            onClick={handleBackToTop}
            title="back to top"
          >
            ☝︎
          </button>
        </div> */}
      </Router>
    </div>
  );
}

export default App;
