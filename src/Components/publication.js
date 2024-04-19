// Import necessary libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Publication component
const Publication = ({ publication }) => {
  return (
    <div className="publication">
      <div className="publication-header">
        <img src={publication.avatar} alt={publication.author} className="avatar" />
        <div>
          <h3>{publication.author}</h3>
          <p>{publication.date}</p>
        </div>
      </div>
      <p className="publication-content">{publication.content}</p>
      <div className="publication-footer">
        <div className="likes">
          <i className="fas fa-thumbs-up"></i>
          <span>{publication.likes}</span>
        </div>
        <div className="comments">
          <i className="fas fa-comment"></i>
          <span>{publication.comments.length}</span>
        </div>
      </div>
      <div className="comments-section">
        {publication.comments.map((comment, index) => (
          <div key={index} className="comment">
            <img src={comment.avatar} alt={comment.author} className="avatar" />
            <div>
              <h4>{comment.author}</h4>
              <p>{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
