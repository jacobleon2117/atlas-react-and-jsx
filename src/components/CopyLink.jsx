import React from "react";
import Copy from "../assets/copy.svg";

const CopyLink = ({ link }) => {
  const handleClick = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <img src={Copy} alt="Copy Link" className="copy" onClick={handleClick} />
  );
};

export default CopyLink;
