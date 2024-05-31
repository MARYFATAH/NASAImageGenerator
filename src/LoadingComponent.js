import React from 'react'
import './LoadingComponent.css';

const LoadingComponent = ({ message }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-message">{message}</p>
    </div>
  );
};

export default LoadingComponent;