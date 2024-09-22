// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <div className="home">
      <p>Passionate Developer dedicated to building impactful solutions.</p>
      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
};

export default Home;
