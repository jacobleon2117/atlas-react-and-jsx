import React from "react";
import Copy from "../assets/copy.svg";

const CopyLink = ({ link }) => {
  const handleClick = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <img
      src={Copy}
      alt="Copy Link"
      // Fixed line 13: "classname="Copy" - The class name ( copy ) had an uppercase C which caused the clickable visablibtly
      className="copy"
      onClick={handleClick}
    />
  );
};

export default CopyLink;
