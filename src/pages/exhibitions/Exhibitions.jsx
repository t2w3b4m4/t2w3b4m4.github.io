import ReactGA from 'react-ga4';
import React, { useEffect } from 'react';
import {
  Switch, Route, Link,
} from 'react-router-dom';
import exhibitions from './exhibition-data';
import Exhibition from './Exhibition';
import ExhibitionThumbnail from './ExhibitionThumbnail';
import { WEB_TITLE } from '../../components/appStrings';
import '../../styles/Exhibitions.css';
import routes from '../../routes';
import { ProgressStatus } from './constants';

const createPath = (name) => `/exhibitions/${name}`.toLocaleLowerCase();

function Exhibitions() {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.title = `${WEB_TITLE} | Exhibitions`;
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="exhibitions">
      <Switch>
        <Route exact path={routes.exhibitions.path}>
          {
            exhibitions.reduce((filtered, e) => {
              if (e.meta.progressStatus !== ProgressStatus.ARCHIVED) {
                filtered.push(
                  <div className="exhibition-links" key={`exhibition-link-${e.meta.name}`}>
                    <Link className="anchor-hover-no-effect" to={createPath(e.meta.name)}><ExhibitionThumbnail data={e} /></Link>
                  </div>,
                );
              }
              return filtered;
            }, [])
          }
        </Route>
        <Route exact path={routes.archives.path}>
          {
            exhibitions.reduce((filtered, e) => {
              if (e.meta.progressStatus === ProgressStatus.ARCHIVED) {
                filtered.push(
                  <div className="exhibition-links" key={`exhibition-link-${e.meta.name}`}>
                    <Link className="anchor-hover-no-effect" to={createPath(e.meta.name)}><ExhibitionThumbnail data={e} /></Link>
                  </div>,
                );
              }
              return filtered;
            }, [])
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
