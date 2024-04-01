import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BasicExample from '../Components/Navigation';
import Login from '../Pages/Login';
import farmers from '../Images/farmrs-removebg-preview.png';
import '../Styles/All.css'; 

function Home() {
  const [isPlaying, setIsPlaying] = useState(false); // State to control video playback

  useEffect(() => {
    const videoElement = document.getElementById('backgroundVideo');

    if (videoElement) {
      videoElement.addEventListener('ended', () => videoElement.play()); // Loop playback
      setIsPlaying(true); // Set initial playing state
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', () => videoElement.play());
      }
    }; // Cleanup on unmount
  }, []); // Empty dependency array for one-time effect

  const handlePlayPause = () => {
    const videoElement = document.getElementById('backgroundVideo');
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="Home">
      <Row className="nav-home">
        <BasicExample />
      </Row>
      <Row>
        <Col md={5} className='forms-container'> 
          <Login />
        </Col>
        <Col md={5}  className="forms-farmers">
          <h3>Atteignez vos clients plus rapidement, <br /> Avec nous.</h3>
          <img src={farmers} alt="image" style={{ width: "600px", height: "300px" }} />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
