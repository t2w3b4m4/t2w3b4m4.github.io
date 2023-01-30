/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-danger */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-undef */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import getImagePathByFileName from './getImagePathByFileName';
import { WEB_TITLE } from '../../components/appStrings';
import '../../styles/Exhibition.css';
import '../../styles/fujifilm-square.css';

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

const IMAGE_PARENT_DIV_HTML_ELEMENT_ID = 'displayName';

function Exhibition({ data }) {
  const exhibitionSlideShowRef = useRef(null);
  const numOfImages = data.showings.length;
  const history = useHistory();
  const [indexOfFocusedImage, setIndexOfFocusedImage] = useState(0);
  const [mouseHoverPointerClass, setMouseHoverPointerClass] = useState('');

  const handleImageThumbnailClick = (indexOfImage) => () => {
    setIndexOfFocusedImage(indexOfImage);
  };

  const handleMouseMoveCaptureOnImage = (e) => {
    const start = e.target.offsetLeft;
    const end = start + e.target.clientWidth;
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
    let indexOfImage = (numOfImages + indexOfFocusedImage + 1) % numOfImages;
    if (mouseHoverPointerClass === ON_HOVER_MOUSE_POINTER_LEFT_CLASS) {
      indexOfImage = (numOfImages + indexOfFocusedImage - 1) % numOfImages;
    }
    setIndexOfFocusedImage(indexOfImage);
    history.push(`#${indexOfImage}`);

    // Show current image in slide show
    // eslint-disable-next-line no-undef
    document.getElementById(indexOfImage).scrollIntoView(); // scrolls list of thumbnails
    document.getElementById(IMAGE_PARENT_DIV_HTML_ELEMENT_ID).scrollIntoView(); // keeps picture in view
  };

  const handleSlideShowLeftClick = () => {
    if (numOfImages <= 1) return;

    // exhibitionSlideShowRef.current.scrollLeft -= SCROLL_WIDTH;
    exhibitionSlideShowRef.current.scrollTop -= SCROLL_WIDTH;
  };

  const handleSlideShowRightClick = () => {
    if (numOfImages <= 1) return;

    // exhibitionSlideShowRef.current.scrollLeft += SCROLL_WIDTH;
    exhibitionSlideShowRef.current.scrollTop += SCROLL_WIDTH;
  };

  const handleKeyDownCapture = (e) => {
    if (e.key === ' ') { e.target.click(); }
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.title = `${WEB_TITLE} | Exhibition | ${data.meta.displayName}`;
  }, [data.meta.displayName]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const exhibitionAndFocusedImage = window.location.hash.split('/').at(-1).split('#');
    if (exhibitionAndFocusedImage.length === 2) {
      const urlIndexOfFocusedImage = parseInt(exhibitionAndFocusedImage[1], 10);
      setIndexOfFocusedImage(urlIndexOfFocusedImage);
      document.getElementById(urlIndexOfFocusedImage).scrollIntoView(); // scrolls list of thumbnails
      document.getElementById(IMAGE_PARENT_DIV_HTML_ELEMENT_ID).scrollIntoView(); // keeps picture in view
    }
  }, []);

  return (
    <div className="exhibition">
      <div className="exhibition-header">
        <div className="exhibition-name">{data.meta.displayName}</div>
        <div className="exhibition-discription">{data.meta.about}</div>
      </div>
      <div className="exhibition-body">
        <div className="exhibition-image-wrapper not-selectable">
          <div
            className={`focused-content-wrapper fujifilm-body ${mouseHoverPointerClass}`}
            onMouseMove={handleMouseMoveCaptureOnImage}
            onClick={handleImageClick}
            id={IMAGE_PARENT_DIV_HTML_ELEMENT_ID}
          >
            <img
              className="focused-image fujifilm-photo"
              src={require(`${getImagePathByFileName(data, data.showings[indexOfFocusedImage].fileName)}`)}
              alt={data.showings[indexOfFocusedImage].displayName}
            />
            {/* <span className="focused-image-wrapper photo">
            </span> */}
            <div
              className="focused-image-description fujifilm-description"
            >
              <div className="image-title">
                {/* <hr /> */}
                {data.showings[indexOfFocusedImage].displayName}
                {/* <hr /> */}
              </div>
              {/* <div className="image-info">
                <div className="image-description" dangerouslySetInnerHTML={{ __html: data.showings[indexOfFocusedImage].description }} />
              </div> */}

            </div>
          </div>
          <div className="exhibition-slide-show-wrapper-vertical">
            <div
              className="slide-show-directional pointer slide-show-left slide-show-up"
              onClick={handleSlideShowLeftClick}
              role="button"
              tabIndex={0}
              onKeyDown={handleKeyDownCapture}
            >
              <span>▲</span>
            </div>
            <div className="exhibition-slide-show-vertical" ref={exhibitionSlideShowRef}>
              {data.showings.map((s, index) => (
                <div
                  className={`exhibition-slide-show-thumbnail-wrapper pointer ${index === indexOfFocusedImage ? 'focused-image-thumbnail' : ''}`}
                  key={`s__${s.fileName}`}
                  onClick={handleImageThumbnailClick(index)}
                  role="menuitem"
                  tabIndex={0}
                  onKeyDown={handleKeyDownCapture}
                  id={index}
                >
                  <Link to={`#${index}`}>
                    <img
                      className="exhibition-slide-show-thumbnail"
                      src={require(`${getImagePathByFileName(data, s.fileName)}`)}
                      alt={s.displayName}
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div
              className="slide-show-directional pointer vertical-flip slide-show-right slide-show-down"
              onClick={handleSlideShowRightClick}
              role="button"
              tabIndex={0}
              onKeyDown={handleKeyDownCapture}
            >
              <span>▲</span>
            </div>
          </div>
        </div>
        <div className="image-info">
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
