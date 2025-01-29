"use client";

import React, { useRef } from "react";
import { text } from "@/constants";
import Tag from "./Tag";
import { useScroll } from "framer-motion";

const Introduction = () => {
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end start"],
  });

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20">
          <div className="flex justify-center">
            <Tag>Introducing Layers</Tag>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>Your creative process deserves better.</span>
            <span className="text-white/15"> {text} </span>
            <span className="text-lime-400 block">
              That&apos;s why we built Layers.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
};

export default Introduction;
