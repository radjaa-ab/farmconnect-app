import React from 'react';
import HorsCnx from '../Images/HorsCnx.png';
import Button from 'react-bootstrap/Button';
import styles from '../Styles/All.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Offline() {
    return (
      <div className={styles.offlineContainer}>
        <img src={HorsCnx} alt="No connection" className={styles.offlineImage} />
        <h3 className={styles.offlineTitle}>Oh non!</h3>
        <p className={styles.offlineMessage}>Pas de connexion</p>
        <Button variant="outline-success" className={styles.retryButton}>Ressayer</Button>
      </div>
    );
  }
export default Offline;