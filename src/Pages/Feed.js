import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { BsCameraVideoFill, BsImageFill } from 'react-icons/bs'; // Import icons
import Post from '../Components/Post';
import téléchargement from '../Components/téléchargement.jpg';
import Navigation from '../Components/Navigation';
import Footer from '../Components/footer';
import avatar from '../Components/avatar.png';

function Feed() {
  const { t } = useTranslation();

  // Dummy data for posts (you can replace it with actual data from a database)
  const [posts, setPosts] = useState([
    {
      id: 1,
      avatar: avatar,
      author: 'John Doe',
      date: 'April 19, 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      media: téléchargement, // Assuming téléchargement is the correct path to the image
    },
    // Add more posts as needed
  ]);

  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Post:', newPost);
    setNewPost('');
  };

  const handleVideoClick = () => {
    // Handle video icon click
    console.log('Video icon clicked');
    // Show the "Choose File" dialog for videos
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'video/*';
    input.click();
  };

  const handleImageClick = () => {
    // Handle image icon click
    console.log('Image icon clicked');
    // Show the "Choose File" dialog for images
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.click();
  };

  return (
    <div className="Feed">
      <Row className="nav-Feed">
        <Navigation />
      </Row>
      <Row style={{ ...Styles.postcontainer, margin: '0 auto', maxWidth: '1200px', marginLeft: '430px' }}>
        <Col md={4} className="post-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="newPost">
              <Form.Control
                className="Holder"
                as="textarea"
                rows={3}
                placeholder={t('Write something...')}
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                style={Styles.newPost}
              />
            </Form.Group>
            <div className="icon-container">
              <div className="icon" onClick={handleVideoClick}>
                
                <BsCameraVideoFill />
                <span>Saisir vidéo</span>
              </div>
              <div className="icon" onClick={handleImageClick}>
                <BsImageFill />
                <span>Saisir photo</span>
              </div>
            </div>
            <Button variant="primary" type="submit" style={Styles.Button}>
              {t('Post')}
            </Button>
          </Form>
        </Col>
      </Row>
      <Row style={{ ...Styles.postcontainer, margin: '0 auto', maxWidth: '1200px', marginLeft: '430px' }}>
        <Col md={8} className="feed-container">
          {/* Iterate over posts array and render each post */}
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

const Styles = {
  postcontainer: {
    marginTop: '30px',
    marginBottom: '20px',
  },
  Button: {
    marginLeft: '600px',
    color: 'white',
    backgroundColor: 'green',
    width: '180px',
    marginBottom: '30px',
    marginTop: '20px',
  },
  newPost: {
    width: '780px',
    padding: '10px',
    border: '5px solid lightgreen',
    borderRadius: '5px',
    fontSize: '16px',
    marginTop: '50px',
  },
};

export default Feed;