import React from 'react';
import img1 from '../image/img-01.jpg';
import img2 from '../image/img-02.jpg';
import img3 from '../image/img-03.jpg';
import img4 from '../image/img-04.jpg';
import '../style/Gallery.css';

function Gallery() {
    const images = [
        { src: img1, name: 'Havanna, Cuba' },
        { src: img2, name: 'New York, USA' },
        { src: img3, name: 'Calgary, Canada' },
        { src: img4, name: 'Cancun, Mexico' }
    ];

    return (
        <div className='gallery-container'>
            <h2>Find your <span>destination</span></h2>
            <div className="gallery">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image.src} alt={`Gallery item ${index}`} />
                        <div className="image-name">{image.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
