import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import mapImage from "./MAP.png";
import styles from "./styles.css";

export default class Karte extends Component {
  render() {
    return (
      <div>
        <Image src={mapImage} className="KartenImage" />
      </div>
    );
  }
}
