// src/components/Header.js
import React from 'react';
import '../style/Header.css';

function Header() {
    return (
        <header>
            <h1>Wings<i class="fa-solid fa-feather"></i></h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Destinations</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
