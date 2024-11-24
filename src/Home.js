import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
  return (
    <div className="container py-4">
      {/* Bootstrap Carousel */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <img
              src="https://p16.resso.me/img/tos-alisg-i-0071-sg/bedfbbf87e9149bca2a4d27451a624d2~c5_1000x1000.jpg"
              className="d-block w-100 carousel-img"
              alt="Slide 1"
            />
          </div>
          {/* Second Slide */}
          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/OIP.NVn-LbYg-kDLvBeYQTQz5AAAAA?w=329&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="d-block w-100 carousel-img"
              alt="Slide 2"
            />
          </div>
          {/* Third Slide */}
          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/OIP.X44zbZPzYYfGzK_ofOAePwAAAA?rs=1&pid=ImgDetMain"
              className="d-block w-100 carousel-img"
              alt="Slide 3"
            />
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Grid of Spotify Embeds */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 mt-4">
        {/* Spotify Artist Embed 1 */}
        <div className="col">
          <iframe
            src="https://open.spotify.com/embed/artist/1wRPtKGflJrBx9BmLsSwlU?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Artist Embed"
            className="rounded-3"
          ></iframe>
        </div>

        {/* Spotify Artist Embed 2 */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', maxWidth: '100%', margin: '20px auto' }}>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1E4mZvA09hvuJo?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist"
      ></iframe>
    </div>


        {/* Spotify Artist Embed 3 */}
        <div className="col">
          <iframe
            src="https://open.spotify.com/embed/artist/1wRPtKGflJrBx9BmLsSwlU?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Artist Embed"
            className="rounded-3"
          ></iframe>
        </div>

        {/* Spotify Album Embed */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', maxWidth: '100%', margin: '20px auto' }}>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8xfQRRX1PDm?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist"
      ></iframe>
    </div>
      </div>

{/* 2nd row */}


 {/* Grid of Spotify Embeds */}
 <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 mt-4">
        {/* Spotify Artist Embed 1 */}
        <div className="col">
          <iframe
            src="https://open.spotify.com/embed/artist/1wRPtKGflJrBx9BmLsSwlU?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Artist Embed"
            className="rounded-3"
          ></iframe>
        </div>

        {/* Spotify Artist Embed 2 */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', maxWidth: '100%', margin: '20px auto' }}>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/album/1ShrAiTDbq2soLmIpmIvd8?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Album"
      ></iframe>
    </div>


        {/* Spotify Artist Embed 3 */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', maxWidth: '100%', margin: '20px auto' }}>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdpQPPZq3F7n?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist"
      ></iframe>
    </div>

        {/* Spotify Album Embed */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', maxWidth: '100%', margin: '20px auto' }}>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWSwxyU5zGZYe?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist Embed"
      ></iframe>
    </div>
      </div>


    </div>
  );
}

export default Home;
