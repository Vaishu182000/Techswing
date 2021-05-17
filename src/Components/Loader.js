import React from 'react';
import load from './Images/loader.png';
import './Styles.css';

function Loader() {
  return (
    <div className="loader center">
      <img src={load} alt="loader" className="fa-spin"/>
    </div>
  );
}

export default Loader;
