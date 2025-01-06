import React from "react";

import LinkedIn from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/jacobleon02"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LinkedIn} alt="LinkedIn Profile" />
      </a>
      <a
        href="https://github.com/jacobleon2117/atlas-react-and-jsx"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GitHub} alt="Github Repository" />
      </a>
    </div>
  );
};

export default SocialLinks;
