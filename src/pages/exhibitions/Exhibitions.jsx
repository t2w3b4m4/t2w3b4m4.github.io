import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';
import {
  Switch, Route, Link,
} from 'react-router-dom';
import exhibitions from './exhibition-data';
import Exhibition from './Exhibition';
import ExhibitionThumbnail from './ExhibitionThumbnail';
import '../../styles/Exhibitions.css';

const createPath = (name) => `/exhibitions/${name}`.toLocaleLowerCase();

function Exhibitions() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="exhibitions">
      <Switch>
        <Route exact path="/exhibitions">
          {
            exhibitions.map((e) => (
              <div className="exhibition-links" key={`exhibition-link-${e.meta.name}`}>
                <Link className="anchor-hover-no-effect" to={createPath(e.meta.name)}><ExhibitionThumbnail data={e} /></Link>
              </div>
            ))
          }
        </Route>

        { exhibitions.map((e) => (
          <Route exact path={createPath(e.meta.name)} key={`exhibition-route-${e.meta.name}`}>
            <Exhibition data={e} />
          </Route>
        ))}

      </Switch>
    </div>
  );
}

export default Exhibitions;
