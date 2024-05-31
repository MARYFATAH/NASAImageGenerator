import React from 'react'
import './ErrorComponent.css'

export const ErrorComponent = ({ title, message, onRetry }) => {
  return (
    <div>
        <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h1 className="error-title">{title}</h1>
        <p className="error-message">{message}</p>
    </div>     
    </div>
  )
}
export default ErrorComponent;