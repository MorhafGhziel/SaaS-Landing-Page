import React from "react";
import logoImage from "@/public/logo.svg";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <section>
      <div className="container">
        <div>
          <div>
            <Image src={logoImage} alt="Layers Logo" />
          </div>
          <div>
            {footerLinks.map((link) => (
              <a href={link.href}>{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
