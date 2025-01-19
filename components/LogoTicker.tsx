import React from "react";
import { logos } from "@/constants";
import Image from "next/image";

const LogoTicker = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h3 className="text-center text-white/50 text-xl">
          Already chosen by these market leaders
        </h3>
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
