import React, { useState } from 'react';
import { Row, Col, Form, Button, Placeholder } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Post from '../Components/Post';
import téléchargement from '../Components/téléchargement.jpg';
import Navigation from '../Components/Navigation';
import Footer from '../Components/footer'; // Make sure the path is correct

function Feed() {
  const { t } = useTranslation();

  // Dummy data for posts (you can replace it with actual data from a database)
  const [posts, setPosts] = useState([
    {
      id: 1,
      avatar: 'url_to_avatar_image',
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

  return (
    <div className="Feed">
      <Row className="nav-Feed">
        <Navigation />
      </Row>
      <Row style={{ ...Styles.postcontainer, margin: '0 auto', maxWidth: '1200px', marginLeft: '430px' }}>
        <Col md={4} className="post-container">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="newPost">
              <Form.Control className='Holder'
                //Styles={{marginTop: '100px'}}
                as="textarea"
                rows={3}
                placeholder={t('Write something...')}
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                style={Styles.newPost}
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={Styles.Button}>
              {t('Post')}
            </Button>
          </Form>
        </Col>
      </Row>
      <Row style={{ ...Styles.postcontainer, margin: '0 auto', maxWidth: '1200px', marginLeft: '430px'}}>
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
  /*newPost: {
    marginLeft: '20px',
    width: '100%',
  },*/
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
