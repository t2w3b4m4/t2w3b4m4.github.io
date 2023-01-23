/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-danger */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import getImagePathByFileName from './getImagePathByFileName';
import '../../styles/Exhibition.css';

const SCROLL_WIDTH = 100;
const ON_HOVER_MOUSE_POINTER_LEFT_CLASS = 'on-hover-mouse-pointer-left';
const ON_HOVER_MOUSE_POINTER_RIGHT_CLASS = 'on-hover-mouse-pointer-right';

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
function Exhibition({ data }) {
  const exhibitionSlideShowRef = useRef(null);
  const numOfImages = data.showings.length;
  const [indexOfFocusedImage, setIndexOfFocusedImage] = useState(0);
  const [mouseHoverPointerClass, setMouseHoverPointerClass] = useState('');

  const handleImageThumbnailClick = (indexOfImage) => () => {
    setIndexOfFocusedImage(indexOfImage);
  };

  const handleMouseMoveCaptureOnImage = (e) => {
    const start = e.target.offsetLeft;
    const end = start + e.target.width;
    const middle = (start + end) / 2;

    if (middle > e.clientX) {
      // left
      setMouseHoverPointerClass(ON_HOVER_MOUSE_POINTER_LEFT_CLASS);
    } else {
      // right
      setMouseHoverPointerClass(ON_HOVER_MOUSE_POINTER_RIGHT_CLASS);
    }
  };

  const handleImageClick = () => {
    if (mouseHoverPointerClass === ON_HOVER_MOUSE_POINTER_LEFT_CLASS) {
      const indexOfImage = (numOfImages + indexOfFocusedImage - 1) % numOfImages;
      setIndexOfFocusedImage(indexOfImage);
    } else {
      const indexOfImage = (numOfImages + indexOfFocusedImage + 1) % numOfImages;
      setIndexOfFocusedImage(indexOfImage);
    }
  };

  const handleSlideShowLeftClick = () => {
    if (numOfImages <= 1) return;

    exhibitionSlideShowRef.current.scrollLeft -= SCROLL_WIDTH;
  };

  const handleSlideShowRightClick = () => {
    if (numOfImages <= 1) return;

    exhibitionSlideShowRef.current.scrollLeft += SCROLL_WIDTH;
  };

  const handleKeyDownCapture = (e) => {
    if (e.key === ' ') { e.target.click(); }
  };

  return (
    <div className="exhibition">
      <div className="exhibition-header">
        {/* <div className="back-button">
          <Link to="/exhibitions" title="back">
            {'<- '}
          </Link>
        </div> */}
        <div className="exhibition-name">{data.meta.displayName}</div>
        <div className="exhibition-discription">{data.meta.about}</div>
      </div>
      <div className="exhibition-body">
        <div className="exhibition-image-wrapper">
          <div className="focused-image-wrapper">
            <img
              className={`focused-image ${mouseHoverPointerClass}`}
              src={require(`${getImagePathByFileName(data, data.showings[indexOfFocusedImage].fileName)}`)}
              alt={data.showings[indexOfFocusedImage].displayName}
              onMouseMove={handleMouseMoveCaptureOnImage}
              onClick={handleImageClick}
            />
          </div>
          <div className="exhibition-slide-show-wrapper">
            <div
              className="slide-show-directional pointer slide-show-left horizontal-flip"
              onClick={handleSlideShowLeftClick}
              role="button"
              tabIndex={0}
              onKeyDown={handleKeyDownCapture}
            >
              ➤
            </div>
            <div className="exhibition-slide-show" ref={exhibitionSlideShowRef}>
              {data.showings.map((s, index) => (
                <div
                  className={`exhibition-slide-show-thumbnail-wrapper pointer ${index === indexOfFocusedImage ? 'focused-image-thumbnail' : ''}`}
                  key={`s__${s.fileName}`}
                  onClick={handleImageThumbnailClick(index)}
                  role="menuitem"
                  tabIndex={0}
                  onKeyDown={handleKeyDownCapture}
                >
                  <img
                    className="exhibition-slide-show-thumbnail"
                    src={require(`${getImagePathByFileName(data, s.fileName)}`)}
                    alt={s.displayName}
                  />
                </div>
              ))}
            </div>
            <div
              className="slide-show-directional pointer slide-show-right"
              onClick={handleSlideShowRightClick}
              role="button"
              tabIndex={0}
              onKeyDown={handleKeyDownCapture}
            >
              ➤
            </div>
          </div>
        </div>
        <div className="image-info">
          <div className="image-name">
            {data.showings[indexOfFocusedImage].displayName}
            <hr />
          </div>
          <div className="image-description" dangerouslySetInnerHTML={{ __html: data.showings[indexOfFocusedImage].description }} />
        </div>
      </div>
    </div>
  );
}

Exhibition.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Exhibition;
