import React from 'react';
import './SettingsPage.css'; // Import CSS file for styling
import BasicExample from '../Components/Navigation'; // Import the navigation bar component
import Footer from '../Components/footer';
import img from '../Images/Mourad.png'; // Import the user's photo

const Account = () => {
  return (
    <div>
      <BasicExample /> {/* Include the navigation bar */}
      <div className="app">
        <div className="profile-sidebar">
          <div className="profile-card">
            <img
              src={img} // Use the imported user photo
              alt="user photo"
              className="profile-photo"
            />
            <div className="profile-info">
              <div className="profile-name">Mourad</div>
              <div className="profile-email">Mourad@email.com</div>
            </div>
          </div>
        </div>
        <div className="profile-main">
          <div className="profile-header">
            <div className="profile-header__title">Mon Profile</div>
          </div>
          <div className="profile-content">
            <div className="profile-section">
              <h2>A Propos de moi</h2>
              <p>Je suis passionné par l'agriculture durable et je m'efforce de développer des solutions innovantes pour relever les défis auxquels est confronté le secteur agricole. Fort d'une expérience en ingénierie et d'une profonde compréhension des pratiques agricoles, je suis déterminé à optimiser les processus agricoles, à réduire l'impact environnemental et à garantir la sécurité alimentaire pour les générations futures.</p>
            </div>
            <div className="profile-section">
              <h2>Interests</h2>
              <ul>
                <li>Conception : J'apprécie la création et la mise en œuvre de technologies et de solutions agricoles innovantes.</li>
                <li>Agriculture Durable : Je m'engage à promouvoir des pratiques agricoles respectueuses de l'environnement.</li>
                <li>Engagement Communautaire : Je crois en l'établissement de relations solides au sein de la communauté agricole et en le partage des connaissances et des ressources pour un bénéfice mutuel.</li>
                <li>Activités en Plein Air : Dans mes temps libres, j'apprécie passer du temps en plein air, explorer la nature et m'adonner à des activités telles que la randonnée et le jardinage.</li>
              
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

export default Account;
