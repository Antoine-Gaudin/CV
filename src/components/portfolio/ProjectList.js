import React, { Component } from "react";
import { portfolioData } from "../../data/PortfolioData";
import Project from "./Project";

class ProjectList extends Component {
  state = {
    projects: portfolioData,
  };

  render() {
    let { projects } = this.state;

    return (
      <div className="portfolioContent">
        <h1>Liste des projets</h1>
        <ul className="radioDisplay"></ul>
        <div className="projects">
          {projects.map((item) => {
            return <Project key={item.id} item={item} />;
          })}
          ;
        </div>
      </div>
    );
  }
}

export default ProjectList;
