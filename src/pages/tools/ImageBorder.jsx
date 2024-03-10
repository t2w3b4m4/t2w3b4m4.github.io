/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react';
import './ImageBorder.css';

const FULL_HEIGHT = 1;
const FULL_HEIGHT_102 = 1.02;
const FULL_HEIGHT_103 = 1.03;
const FULL_HEIGHT_105 = 1.05;
const DEFAULT_FILL_STYLE = 'white';
const FILL_STYLE_BLACK = 'black';

function ImageBorder() {
  const canvasRef = useRef(null);
  const [squaredBackground, setSquaredBackground] = useState(false);
  const [image, setImage] = useState(null);
  const [borderRatio, setBorderRatio] = useState(FULL_HEIGHT);
  const [customBorderRatio, setCustomBorderRatio] = useState(0);
  const [useCustomBorderRatio, setUseCustomBorderRatio] = useState(false);
  const [fillStyle, setFillStyle] = useState(DEFAULT_FILL_STYLE);

  const handleFileChange = (event) => {
    // Get the file from the input element
    const file = event.target.files[0];

    // Create a FileReader object
    const reader = new FileReader();

    // Set the onload event handler
    reader.onload = (e) => {
      // Set the image data as the src attribute of the Image object
      setImage(e.target.result);
    };

    // Read the file as a data URI
    reader.readAsDataURL(file);
  };

  const handleSave = (fractionOfSizeToSave = 1) => () => {
    // Get the canvas and context
    const canvas = canvasRef.current;

    let actualFractionOfSizeToSave = 1;
    // Get the image data as a data URI
    if (fractionOfSizeToSave <= 1 && fractionOfSizeToSave >= 0) {
      actualFractionOfSizeToSave = fractionOfSizeToSave;
    }
    const blobURL = canvas.toDataURL('image/jpeg', actualFractionOfSizeToSave);

    // Create a blob URL
    // const blobURL = URL.createObjectURL(dataURI);

    // Create a link element
    const link = document.createElement('a');

    // Set the href attribute of the link to the blob URL
    link.href = blobURL;

    // Set the download attribute of the link to a file name
    link.download = 'image.jpg';

    // Click the link to download the image
    link.click();
  };

  const handleToggleSquaredBackground = (e) => {
    setSquaredBackground(e.target.checked);
  };

  const handleToggleUseCustomBorderRatio = (e) => {
    const { checked } = e.target;
    setUseCustomBorderRatio(checked);
    if (checked) {
      setBorderRatio(customBorderRatio);
    }
  };

  const handlePaddingRatioSelect = (e) => {
    setBorderRatio(parseFloat(e.target.value, 10));
  };

  const handlePaddingRatioInput = (e) => {
    const value = parseFloat(e.target.value, 10);
    if (value >= 0) {
      setCustomBorderRatio(value);
      setBorderRatio(value / 100.0 + 1.0);
    }
  };

  const handleFillStyleSelect = (e) => {
    setFillStyle(e.target.value);
  };

  useEffect(() => {
    // Get the canvas and context
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Load the image
    const img = new Image();
    img.src = image;
    img.onload = () => {
      // Get the size of the image
      const { width, height } = img;

      if (squaredBackground) {
        // Calculate the size of the background
        const bgSize = Math.max(width, height) * borderRatio;

        // Set the size of the canvas
        canvas.width = bgSize;
        canvas.height = bgSize;
      } else {
        const borderSize = Math.max(width * borderRatio - width, height * borderRatio - height);
        // Set the size of the canvas
        canvas.width = width + borderSize;
        canvas.height = height + borderSize;
      }

      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = fillStyle;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate the position of the image
      const x = (canvas.width - width) / 2;
      const y = (canvas.height - height) / 2;

      // Draw the image onto the canvas
      ctx.drawImage(img, x, y);
    };
  }, [image, borderRatio, fillStyle, squaredBackground]);

  return (
    <>
      <h3>Save image with border</h3>
      <input type="file" onChange={handleFileChange} />
      <div>

        <hr />
        <div>
          <b>Squared Background:</b>
          {' '}
          <input type="checkbox" checked={squaredBackground} onChange={handleToggleSquaredBackground} />
        </div>
        <hr />
        <div>
          <b>(% of image size) Border</b>
        </div>
        Use Custom Border:
        {' '}
        <input type="checkbox" checked={useCustomBorderRatio} onChange={handleToggleUseCustomBorderRatio} />
        <div hidden={useCustomBorderRatio}>
          <div>
            2%:
            {' '}
            <input type="radio" value={FULL_HEIGHT_102} onChange={handlePaddingRatioSelect} checked={borderRatio === FULL_HEIGHT_102} />
          </div>
          <div>
            3%:
            {' '}
            <input type="radio" value={FULL_HEIGHT_103} onChange={handlePaddingRatioSelect} checked={borderRatio === FULL_HEIGHT_103} />
          </div>
          <div>
            5%:
            {' '}
            <input type="radio" value={FULL_HEIGHT_105} onChange={handlePaddingRatioSelect} checked={borderRatio === FULL_HEIGHT_105} />
          </div>
        </div>
        <div hidden={!useCustomBorderRatio}>
          Custom %:
          {' '}
          <input disabled={!useCustomBorderRatio} type="number" value={customBorderRatio} onChange={handlePaddingRatioInput} />
        </div>
        <hr />
        <div>
          White Border:
          {' '}
          <input type="radio" value={DEFAULT_FILL_STYLE} onChange={handleFillStyleSelect} checked={fillStyle === DEFAULT_FILL_STYLE} />
        </div>
        <div>
          Black Border:
          {' '}
          <input type="radio" value={FILL_STYLE_BLACK} onChange={handleFillStyleSelect} checked={fillStyle === FILL_STYLE_BLACK} />
        </div>
        <hr />
      </div>
      <button type="button" onClick={handleSave(1)} disabled={image === null}>Save (Actual Size)</button>
      <button type="button" onClick={handleSave(0.7)} disabled={image === null}>Save (70% of Original Size)</button>
      <canvas ref={canvasRef} className="canvas" />
    </>
  );
}

export default ImageBorder;
