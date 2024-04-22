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

    const [content, setContent] = useState('');
    const [media, setMedia] = useState(null);
  
    const handleContentChange = (event) => {
      setContent(event.target.value);
    };
  
    const handleMediaChange = (event) => {
      const file = event.target.files[0];
      setMedia(file);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Envoyer le contenu et les médias au backend ou effectuer une action appropriée
      console.log('Contenu de la publication :', content);
      console.log('Média de la publication :', media);
      // Réinitialiser les états après soumission
      setContent('');
      setMedia(null);
    };
  

  return (
    <div className="Feed">
      <Row className="nav-Feed">
        <Navigation />
      </Row>

      <form onSubmit={handleSubmit} className='nouv'>
      <textarea
        value={content}
        onChange={handleContentChange}
        placeholder="Entrez votre publication ici..."
        style={{
          width: '765px',
          minHeight: '100px',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          marginLeft:'445px'
        }}
      />
      <input
        type="file"
        accept="image/*, video/*"
        onChange={handleMediaChange}
        style={{ marginBottom: '10px', marginLeft:'845px' }}
      />
      <button type="submit">Publier</button>
    </form>
      
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