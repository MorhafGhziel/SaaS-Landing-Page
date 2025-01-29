"use client";

import React, { useRef, useState, useEffect } from "react";
import { text } from "@/constants";
import Tag from "./Tag";
import { useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

const Introduction = () => {
  const words = text.split(" ");

  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end start"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-20">
          <div className="flex justify-center">
            <Tag>Introducing Layers</Tag>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>Your creative process deserves better.</span>
            <span>
              {" "}
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge(
                    "transition duration-500 text-white/15",
                    wordIndex < currentWord && "text-white"
                  )}
                >{`${word} `}</span>
              ))}{" "}
            </span>
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
