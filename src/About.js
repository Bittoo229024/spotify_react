import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Spotify</h1>
        <p>
          Spotify is the world’s most popular audio streaming subscription service with millions of tracks, podcasts, and stories. 
          Wherever you go, your soundtrack follows.
        </p>
      </div>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Spotify’s mission is to unlock the potential of human creativity by giving a million creative artists 
            the opportunity to live off their art and billions of fans the opportunity to enjoy and be inspired by it.
          </p>
        </div>
        <div className="about-section">
          <h2>Our History</h2>
          <p>
            Founded in 2006 in Stockholm, Sweden, Spotify revolutionized the way we listen to music. What started as 
            a solution to music piracy has grown into a global platform where fans can discover, stream, and share music seamlessly.
          </p>
        </div>
        <div className="about-section">
          <h2>Features</h2>
          <ul>
            <li>Access over 100 million tracks, including the latest releases.</li>
            <li>Create and share custom playlists with friends and family.</li>
            <li>Enjoy high-quality audio with no interruptions on Premium.</li>
            <li>Explore personalized recommendations just for you.</li>
            <li>Offline mode lets you take your music anywhere.</li>
          </ul>
        </div>
        <div className="about-section">
          <h2>Global Reach</h2>
          <p>
            Spotify is available in over 180 countries, connecting diverse cultures and bringing people together through music.
            From trending Bollywood hits in India to top-charting K-pop in Korea, Spotify ensures there’s something for everyone.
          </p>
        </div>
        <div className="about-section">
          <h2>Future Vision</h2>
          <p>
            As we continue to grow, Spotify aims to innovate in audio streaming by introducing more features like live concerts,
            artist collaborations, and AI-curated playlists. Our goal is to create a seamless, immersive audio experience for every listener.
          </p>
        </div>
        <div className="about-section">
          <h2>Why Choose Spotify?</h2>
          <p>
            - Access millions of songs and podcasts <br />
            - Curated playlists for every mood <br />
            - Connect with artists and share your favorite tracks
          </p>
        </div>
        <div className="about-section">
          <h2>Join Us</h2>
          <p>
            With Spotify, you can listen to the latest music, build your playlist, and explore new genres, all in one place.
            Join the Spotify family today and let the music move you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
