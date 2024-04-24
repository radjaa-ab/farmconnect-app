import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { db, storage } from '../firebase'
import firebase from 'firebase/app';
import Post from '../Components/Post';
import Navigation from '../Components/Navigation';
import Footer from '../Components/footer';
import avatar from '../Components/avatar.png';
import avatar1 from '../Components/avatar2.png';
import avatar2 from '../Components/avatar1.jpg';

function Feed() {
  const [hoveringButtonDirect, setHoveringButtonDirect] = useState(false);
  const [hoveringButtonPoster, setHoveringButtonPoster] = useState(false);
  const [content, setContent] = useState('');
  const [media, setMedia] = useState(null);
  const { t } = useTranslation();

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleMediaChange = (event) => {
    const file = event.target.files[0];
    setMedia(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      let mediaUrl = null;
  
      if (media) {
        const storageRef = storage.ref(`media/${media.name}`);
        await storageRef.put(media);
        mediaUrl = await storageRef.getDownloadURL();
      }
  
      // Add post to Firestore
      const newPostRef = await db.collection('posts').add({
        content: content,
        mediaUrl: mediaUrl,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
      });
  
      // Set document with specific data
      await db.collection('specificCollection').doc(newPostRef.id).set({
        content: content,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        // Add other fields as needed
      });
  
      setContent('');
      setMedia(null);
  
      console.log('Post submitted successfully');
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };
  

  const posts = [
    {
      id: 1,
      avatar: avatar,
      author: 'John Doe',
      date: 'April 19, 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      media: null,
    },
    {
      id: 2,
      avatar: avatar1,
      author: 'Amr korso',
      date: '23 Avril 2024',
      content: 'Un tuto pour bien arroser des fleurs',
      media: null,
    },
    {
      id: 3,
      avatar: avatar2,
      author: 'John Doe',
      date: '22 Mars 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      media: null,
    },
  ];

  return (
    <div className="Feed">
      <Row className="nav-Feed">
        <Navigation />
      </Row>

      <div className="something">
        <input
          style={{ width: '720px', height: '50px' }}
          placeholder="  Nouvelle astuce ?"
          aria-label="Créer une publication"
          type="text"
          value={content}
          onChange={handleContentChange}
        />
        <div className="buttons" style={{ marginLeft: '400px', marginBottom: '15px' }}>
          <button
            onClick={() => document.getElementById('direct').click()}
            style={hoveringButtonDirect ? { background: 'green' } : {}}
            onMouseEnter={() => setHoveringButtonDirect(true)}
            onMouseLeave={() => setHoveringButtonDirect(false)}
          >
            <span>Photo/Video</span>
            <input type="file" id="direct" style={{ display: 'none' }} onChange={handleMediaChange} />
          </button>

          <button
            onClick={handleSubmit}
            style={hoveringButtonPoster ? { background: 'green' } : {}}
            onMouseEnter={() => setHoveringButtonPoster(true)}
            onMouseLeave={() => setHoveringButtonPoster(false)}
          >
            <span>Publier</span>
          </button>
        </div>
      </div>

      <Row style={{ margin: '0 auto', maxWidth: '1200px' }}>
        <Col md={8} className="feed-container">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Feed;
