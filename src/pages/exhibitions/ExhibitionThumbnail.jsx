/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import getImagePathByFileName from './getImagePathByFileName';
// import '../../styles/ExhibitionThumbnail.css';
import '../../styles/fujifilm-square.css';

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
      <div className="fujifilm-body">
        {/* <div className="exhibition-thumbnail-image-wrapper"> */}
        <img
          className="fujifilm-photo"
          src={require(`${getImagePathByFileName(data, data.showings[0].fileName)}`)}
          alt={data.showings[0].name}
        />
        {/* </div> */}
        <div className="fujifilm-description">
          {/* <hr /> */}
          <span className="exhibition-name">{data.meta.displayName}</span>
        </div>
      </div>
      <div className="exhibition-info image-info">
        <div className="progress-status">
          <u>Status</u>
          {': '}
          {data.meta.progressStatus ? data.meta.progressStatus : 'N/A'}
        </div>
        <div className="exhibition-release-status">
          <u>Release Status</u>
          {': '}
          {data.meta.releaseStatus ? data.meta.releaseStatus : 'N/A'}
        </div>
        <div className="exhibition-release-date">
          <u>Release Date</u>
          {': '}
          {data.meta.releaseDate ? data.meta.releaseDate : 'N/A'}
        </div>
        <div className="exhibition-description">
          {data.meta.about}
          {data.meta.numberOfImages ? ` (${data.meta.numberOfImages} images)` : ''}
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

ExhibitionThumbnail.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ExhibitionThumbnail;
