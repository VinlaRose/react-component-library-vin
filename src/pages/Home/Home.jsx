import React from 'react';
import './Home.css'; 
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className="home-page">
      <div className="home-content">
      <div class="animate-charcter">Vinla's UI</div>
        <h1 className="home-heading">The Effortless UI Component Library</h1>
        <p className="home-description">
        Reausable, Simple and Elegant, frequently used React UI components at your disposal. 
        </p>
        <button className="home-get-started-button" onClick={() => navigate("/components")} >EXPLORE </button>
      </div>
    </div>
  );
}

export default Home;
