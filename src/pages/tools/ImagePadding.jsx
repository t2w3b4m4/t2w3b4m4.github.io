/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react';

const FULL_HEIGHT = 1;
const FULL_HEIGHT_105 = 1.05;

function ImagePadding() {
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [paddingSize, setPaddingSize] = useState(FULL_HEIGHT);

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

  const handleSave = () => {
    // Get the canvas and context
    const canvas = canvasRef.current;

    // Get the image data as a data URI
    const blobURL = canvas.toDataURL('image/jpeg');

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

  const handlePaddingSizeSelect = (e) => {
    setPaddingSize(parseFloat(e.target.value, 10));
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

      // Calculate the size of the background
      const bgSize = Math.max(width, height) * paddingSize;

      // Set the size of the canvas
      canvas.width = bgSize;
      canvas.height = bgSize;

      // Clear the canvas
      ctx.clearRect(0, 0, bgSize, bgSize);
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, bgSize, bgSize);

      // Calculate the position of the image
      const x = (bgSize - width) / 2;
      const y = (bgSize - height) / 2;

      // Draw the image onto the canvas
      ctx.drawImage(img, x, y);
    };
  }, [image, paddingSize]);

  return (
    <>
      <h3>Save image with white padding</h3>
      <input type="file" onChange={handleFileChange} />
      <div>
        <div>
          0% Padding:
          {' '}
          <input type="radio" value={FULL_HEIGHT} onChange={handlePaddingSizeSelect} checked={paddingSize === FULL_HEIGHT} />
        </div>
        <div>
          5% Padding:
          {' '}
          <input type="radio" value={FULL_HEIGHT_105} onChange={handlePaddingSizeSelect} checked={paddingSize === FULL_HEIGHT_105} />
        </div>
      </div>
      <button type="button" onClick={handleSave} disabled={image === null}>Save</button>
      <canvas ref={canvasRef} />
    </>
  );
}

export default ImagePadding;
