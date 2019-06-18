import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import mapImage from './MAP.PNG';
import styles from './styles.css';

class Karte extends Component {
  render() {
    return (
      <div>
        <Image src={mapImage} className='KartenImage' />
      </div>
    );
  }
}

export default Karte;
