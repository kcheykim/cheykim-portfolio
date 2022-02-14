import React from 'react';
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">
      <h6>&copy;{new Date().getFullYear()} by Kosal Cheykim
        <span>
          <a className="mx-1" href="https://github.com/kcheykim"><BsGithub /></a>
          <a className="mx-1" href="mailto:kosalcheykim@gmail.com"><MdEmail /></a>
          <a className="mx-1" href="https://www.linkedin.com/in/kosal-cheykim-75484321b/"><ImLinkedin /></a>
        </span></h6>
      </div>
    </footer>
  );
};

export default Footer;
