import React from "react";
import Open from "./OpenLink";
import Copy from "./CopyLink";

const HelpfulResource = ({ link, label }) => {
  return (
    <div className="flex items-center mx-8 mt-4 font-bold text-offwhite last:mb-8">
      {label}
      <Open link={link} className="ml-2" />
      <Copy link={link} className="ml-2" />
    </div>
  );
};

export default HelpfulResource;
