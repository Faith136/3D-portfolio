/* eslint-disable react/no-unescaped-entities */

import { MessageSquareTextIcon, MailIcon,  Github, Linkedin } from "lucide-react";
import Heading from "./Heading";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
        subtitle="A brief explanation about myself."
      />

      {/* Details section  */}

      <div className="mt-10 text-slate-500">
        <p>
                       As a passionate web developer, I thrive on creating web applications that provide engaging user experiences. My academic background in web development has equipped me with the necessary skills to succeed in the industry, and I am eager to apply what I've
                    learned to real-world projects. In addition to my expertise in web development, I am also experienced in networking, as a technical support.
         </p>{" "}
        <br />
        <p>
                    I am eagerly anticipating the opportunity to work with you. Kindly send me an email at the address provided in the contact section. Thank you very much.
        </p>
        {/* Social Links */}
        <div className="flex space-x-6 mt-14">
          <MessageSquareTextIcon className="social-btn" />
          <MailIcon className="social-btn" />
          <a href="https://github.com/Faith136"><Github className="social-btn" /></a>
          <a href="https://www.linkedin.com/in/faith-odongo-4b6977256/"><Linkedin className="social-btn" /></a>
        </div>
        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
            <a href="/cv.pdf" className="primary-btn" download target="_blank" rel="noopener noreferrer">
            Download Resume
    </a>
          <a href="contact" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;