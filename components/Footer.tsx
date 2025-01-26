import React from "react";
import logoImage from "@/public/logo.svg";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <div>
            <Image src={logoImage} alt="Layers Logo" />
          </div>
          <div>
            <nav className="flex gap-6">
              {footerLinks.map((link) => (
                <a href={link.href} className="text-white/50 text-sm">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
