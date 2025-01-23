import React from "react";
import links from "../assets/links.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-12 pb-12 mt-12 flex flex-col items-center justify-center border-t border-offwhite">
      <ul className="flex justify-center items-center p-0">
        {links.map((item, index) => (
          <li key={index} className="p-4">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite no-underline"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-offwhite">© {currentYear} Atlas School</p>
    </footer>
  );
};

export default Footer;
