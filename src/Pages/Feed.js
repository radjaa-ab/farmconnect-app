import React, { useState } from 'react';
import { Row, Col, Form, Button, Placeholder } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Post from '../Components/Post';
import téléchargement from '../Components/téléchargement.jpg';
import Navigation from '../Components/Navigation';
import Footer from '../Components/footer'; // Make sure the path is correct
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

<div className="something"
   style={{marginLeft:'443px', marginBottom:'30px', marginTop:'30px', width:'775px', borderRadius:'4px', border:'solid 2px green'}}>
  <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
  <input
    className="somethingElse"
    style={{width:'720px', marginBottom:'20px', marginTop:'30px', height:'50px', marginLeft:'30px',borderRadius:'4px', border:'solid 2px green', background:'#c6fbc6'}}
    placeholder="  Nouveau astuce ?"
    aria-label="Créer une publication"
    type="text"
  />
  <div className="buttons" 
  style={{marginLeft:'125px', marginBottom:'15px'}}>
    <button onClick={() => document.getElementById('direct').click()}
    style={
      {
        marginRight:'20px',
        borderRadius:'8px',
        border:'none',
        background:'#099009',
        color:'white',
        width:'160px',
        height:'35px'
      }
    }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-red-500"
      >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
        <circle cx="12" cy="13" r="3"></circle>
      </svg>
      <span>En direct</span>
      <input type="file" id="direct" style={{ display: 'none' }} />
    </button>
    <button onClick={() => document.getElementById('media').click()} className="media"
    style={
      {
        marginRight:'20px',
        borderRadius:'8px',
        border:'none',
        background:'#099009',
        color:'white',
        padding:'5px 10px',
        width:'160px',
        height:'35px'
      }
    }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-green-500"
      >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
        <circle cx="12" cy="13" r="3"></circle>
      </svg>
      <span>Photo / vidéo</span>
      <input type="file" id="media" style={{ display: 'none' }} />
    </button>
    <button style={
      {
        marginRight:'20px',
        borderRadius:'8px',
        border:'none',
        background:'#099009',
        color:'white',
        padding:'5px 10px',
        width:'160px',
        height:'35px'
      }
    }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="text-yellow-500"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" x2="9.01" y1="9" y2="9"></line>
        <line x1="15" x2="15.01" y1="9" y2="9"></line>
      </svg>
      <span>Humeur / activité</span>
    </button>
  </div>
</div>
      
      
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
  Direct: {
    marginRight:'100px'
  },

  buttons: {
    marginBottom:'70px',
    marginTop:'3px'
    
  },

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
