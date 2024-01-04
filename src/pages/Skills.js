import React from "react";
import Navigation from "../components/Navigation";
import Language from "../components/competence/Language";
import Experience from "../components/competence/Experience";
import OtherSkills from "../components/competence/OtherSkills";
import Hobbies from "../components/competence/Hobbies";

const About = () => {
  return (
    <div className="Knowledges">
      <Navigation />
      <div className="KnowledgesContent">
        <Language />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default About;
