import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <section className="sidebar">
      <div className="id">
        <div className="idContent">
          <img className="img" src="/AntoineGaudin.jpg" alt="profil" />
          <h3>Antoine Gaudin</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/Compétence">
            <li>Compétences</li>
          </NavLink>
          <NavLink to="/Portfolio">
            <li>Portfolio</li>
          </NavLink>
          <NavLink to="/Contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li className="container-linkedin">
            <a
              href="https://www.linkedin.com/in/antoine-gaudin-298240150/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="fa-linkedin"
                src="/linkedin-logo.avif"
                alt="logo Likedin"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="signature">
        <p>Antoine Gaudin - 2023</p>
      </div>
    </section>
  );
};

export default Navigation;
