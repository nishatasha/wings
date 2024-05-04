// src/components/Banner.js
import React from 'react';
import Button from './Button';  // Ensure Button component is correctly imported
import '../style/Banner.css';

function Banner({ primaryButtonText, onPrimaryButtonClick, secondaryButtonText, onSecondaryButtonClick }) {
    return (
        <div className="banner">
            <div className="banner-text">
                <h2>Discover Amazing Places</h2>
                <p>Join us to explore the most beautiful parts of this world.</p>
            </div>
            <div className="button-container"> {/* Container for buttons */}
                <Button text={primaryButtonText} onClick={onPrimaryButtonClick} />
                <Button text={secondaryButtonText} onClick={onSecondaryButtonClick} />
            </div>
        </div>
    );
}

export default Banner;
