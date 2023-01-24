import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import './styles/App.css';
import NotFound from './pages/404';
import NavigationBar from './components/NavigationBar';

function App() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">

      <Router>
        <div className="logo"><a href="/"><img src="/ma-flipped-transparent.png" alt="馬" /></a></div>
        <div className="navigation">
          <NavigationBar />
        </div>
        <div className="app-content">
          <Switch>
            {Object.values(routes).map((r) => (
              <Route exact={r.path === '/'} path={r.path} component={r.component} key={r.name} />
            ))}
            <Route exact path="/not-found">
              <NotFound />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
