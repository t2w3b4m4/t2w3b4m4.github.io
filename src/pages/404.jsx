import React from 'react';
import '../styles/404.css';

function NotFound() {
  return (
    <div>
      <div>
        You got here because you either refreshed your page or your url is not valid
      </div>
      <h1 className="the-scream">
        <a href="/">🏡 🏃💨</a>
      </h1>
      <br />
    </div>
  );
}

export default NotFound;
