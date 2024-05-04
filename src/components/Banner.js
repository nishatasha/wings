import React from 'react';
import Button from './Button';
import '../style/Banner.css';
import '../style/Button.css';


function Banner({ title, text, primaryButtonText, primaryButtonAction, secondaryButtonText, secondaryButtonAction }) {
    return (
        <div className="banner">
            <div className="banner-text">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="button-container">
                <Button className="primary" text={primaryButtonText} onClick={primaryButtonAction} />
                <Button className="secondary" text={secondaryButtonText} onClick={secondaryButtonAction} />
            </div>
        </div>
    );
}

export default Banner;
