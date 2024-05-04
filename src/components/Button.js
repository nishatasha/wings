// src/components/Button.js
import React from 'react';
import '../style/Button.css';

function Button({ text, onClick }) {
    return (
        <div className="button-container"> {/* Container for alignment */}
            <button className="button" onClick={onClick}>
                
                
                {text}
            </button>
        </div>
    );
}

export default Button;
