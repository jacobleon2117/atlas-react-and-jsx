import React from "react";

const Section = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold m-8 mt-4 mb-4">{title}</h1>
      {children}
    </div>
  );
};

export default Section;
