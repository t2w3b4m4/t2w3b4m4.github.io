/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import getImagePathByFileName from './getImagePathByFileName';
import '../../styles/ExhibitionThumbnail.css';

/**
 * data: {
 *   meta: {
 *     name: 'Precarious',
 *     about: 'Featuring beauty from precariousness',
 *   },
 *   showings: [
 *     {
 *       fileName: 'precarious1.jpg',
 *       name: '',
 *       description: 'precarious #1',
 *       date: '2017-12-01',
 *     }, ...
 *  ],
 * }
 */
function ExhibitionThumbnail({ data }) {
  return (
    <div className="exhibition-thumbnail">
      <div className="exhibition-thumbnail-body">
        <div className="exhibition-thumbnail-image-wrapper">
          <img
            className="exhibition-thumbnail-image"
            src={require(`${getImagePathByFileName(data, data.showings[0].fileName)}`)}
            alt={data.showings[0].name}
          />
        </div>
        <div className="exhibition-thumbnail-text">
          <h4 className="exhibition-name">{data.meta.displayName}</h4>
          <div className="exhibition-description">{data.meta.about}</div>
        </div>
      </div>
    </div>
  );
}

ExhibitionThumbnail.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ExhibitionThumbnail;
