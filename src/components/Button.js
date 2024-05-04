// src/components/Button.js
import React from 'react';
import '../style/Button.css';

function Button({ className, text, onClick }) {
    return (
        <div className="button-container">
            <button className={`button ${className}`} onClick={onClick}>
                {text}
            </button>
        </div>
    );
}

export default Button;
