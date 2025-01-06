import React from "react";
import headShot from "../assets/head-shot.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <img src={headShot} alt="Headshot" />
      <p>
        Hi, I'm Jacob Leon! I'm specializing in Full Stack Software Engineering
        at Atlas Tulsa, currently in my fifth trimester. I love working with
        JavaScript, React, HTML, CSS, TailwindCSS, Node.js, Vite, and
        Express.js. After school, I aim to join a team where I can contribute
        creative ideas while continuing to grow as a developer. When I'm not
        coding, I run Leon's Mobile Detailing LLC, where I find satisfaction in
        transforming vehicles and seeing the joy on customers faces when they
        see their freasly detailed car!
      </p>
    </div>
  );
};

export default AboutMe;
