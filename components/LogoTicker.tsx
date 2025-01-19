import React from "react";
import { logos } from "@/constants";
import Image from "next/image";

const LogoTicker = () => {
  return (
    <section>
      <div className="container">
        <h3>Already chosen by these market leaders</h3>
        <div>
          {logos.map((logo) => (
            <Image src={logo.image} key={logo.name} alt={logo.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
