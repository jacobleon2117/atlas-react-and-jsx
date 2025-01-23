import React from "react";
import Greeting from "./Greeting";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <nav className="flex justify-between items-center pt-4">
      <Greeting />
      <SocialLinks />
    </nav>
  );
};

export default Header;
