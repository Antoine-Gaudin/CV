import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Antoine Gaudin</h1>
          <h2>Développeur Web Junior</h2>
          <div className="pdf">
            <a href="/media/AntoineGaudinCV.pdf" target="_blank" download>
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
