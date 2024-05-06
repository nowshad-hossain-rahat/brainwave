import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import "../assets/scss/Footer.scss";

const Footer = () => {
  return (
    <Section crosses className="footer">
      <div className="container footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul>
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
