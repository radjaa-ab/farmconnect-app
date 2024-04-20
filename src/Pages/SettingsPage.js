import React from 'react';
import './SettingsPage.css'; // Import CSS file for styling
import BasicExample from '../Components/Navigation'; // Import the navigation bar component
import Footer from '../Components/footer';
const SettingsPage = () => {
  return (
    <div>
      <BasicExample /> {/* Include the navigation bar */}
      <div className="app">
        <div className="profile-sidebar">
          <div className="profile-card">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2360&q=80"
              alt="user photo"
              className="profile-photo"
            />
            <div className="profile-info">
              <div className="profile-name">Alexander</div>
              <div className="profile-email">alexander@email.com</div>
            </div>
          </div>
        </div>
        <div className="profile-main">
          <div className="profile-header">
            <div className="profile-header__title">My Profile</div>
          </div>
          <div className="profile-content">
            <div className="profile-section">
              <h2>About Me</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis suscipit tortor.</p>
            </div>
            <div className="profile-section">
              <h2>Interests</h2>
              <ul>
                <li>Design</li>
                <li>Barbeque</li>
                <li>Productivity</li>
                <li>Workout</li>
                <li>Book</li>
                <li>Snack</li>
              </ul>
            </div>
            <div className="profile-section">
              <h2>Photos</h2>
              <div className="profile-photos">
                <img
                  className="profile-photo"
                  src="https://via.placeholder.com/150"
                  alt="Photo 1"
                />
                <img
                  className="profile-photo"
                  src="https://via.placeholder.com/150"
                  alt="Photo 2"
                />
                <img
                  className="profile-photo"
                  src="https://via.placeholder.com/150"
                  alt="Photo 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SettingsPage;
