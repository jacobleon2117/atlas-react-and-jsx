import React from "react";
import Open from "../assets/open.svg";

const OpenLink = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={Open} alt="Open Link" />
    </a>
  );
};

export default OpenLink;
