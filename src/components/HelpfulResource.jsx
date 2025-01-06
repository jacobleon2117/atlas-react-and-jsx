import React from "react";
import Open from "./OpenLink";
import Copy from "./CopyLink";

const HelpfulResource = ({ link, label }) => {
  return (
    <div className="helpful-resource">
      {label}
      <Open link={link} />
      <Copy link={link} />
    </div>
  );
};

export default HelpfulResource;
