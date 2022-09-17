import React from 'react';
import './home.scss';
import HomeButton from '../../components/home-button/homeButton';

const home = () => (
  <div className="d-flex home-section">
    <div className="texts d-flex">
      <h1 className="home-title">HELLO!<br /> WELCOME TO MY WORLD</h1>
      <p className="home-bio">I hope you like the world that I've created.<br /> Thanks for watching it!!<br /> Have a great day.</p>
      <HomeButton />
    </div>
  </div>
);


export default home
