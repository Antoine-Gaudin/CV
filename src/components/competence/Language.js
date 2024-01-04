import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Language extends Component {
  state = {
    languages: [
      { id: 1, value: "PHP", xp: 2 },
      { id: 2, value: "Javascript", xp: 0.8 },
      { id: 3, value: "Css", xp: 2 },
    ],

    frameworks: [
      { id: 1, value: "React", xp: 0.1 },
      { id: 2, value: "Bootstrap", xp: 2 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèque"
        />
      </div>
    );
  }
}

export default Language;
