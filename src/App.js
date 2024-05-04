import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './style/main.css';

const galleryImages = [
  { url: '../image/img-01.jpg', title: 'Image 1' },
  { url: 'https://example.com/image2.jpg', title: 'Image 2' },
  { url: 'https://example.com/image3.jpg', title: 'Image 3' },
  { url: 'https://example.com/image4.jpg', title: 'Image 4' }
];

function App() {
  return (
    <div className="App">
      <Header />
      <Banner
        title="Discover New Destinations"
        text="Experience the beauty of the world with us."
        primaryButtonText="Explore More"
        primaryButtonAction={() => console.log('Explore More!')}
        secondaryButtonText="Learn More"
        secondaryButtonAction={() => console.log('Learn More!')}
      />

      <Gallery images={galleryImages} />
      <Footer />
    </div>
  );
}

export default App;
