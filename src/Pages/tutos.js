
import React, { useState, useEffect } from 'react';
import axios from 'axios';


    
    const fetchPublications = async () => {
      const response = await axios.get('/api/publications');
      setPublications(response.data);
    };
    fetchPublications();

  const handlePublicationSubmit = async () => {
    const newPublicationData = {
      author: 'John Doe',
      avatar: 'https://example.com/avatar.jpg',
      date: new Date().toLocaleString(),
      content: newPublication,
      likes: 0,
      comments: [],
    };
    await axios.post('/api/publications', newPublicationData);
    setNewPublication('');
    fetchPublications();
  };

  return (
    <div className="publications-feed">
      <div className="new-publication">
        <textarea
          value={newPublication}
          onChange={(e) => setNewPublication(e.target.value)}
          placeholder="Poster un astuce...!"
        ></textarea>
        <button onClick={handlePublicationSubmit}>Post</button>
      </div>
      {publications.map((publication, index) => (
        <Publication key={index} publication={publication} />
      ))}
    </div>
  );

export default PublicationsFeed;
