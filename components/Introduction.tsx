import React from "react";
import { text } from "@/constants";
import Tag from "./Tag";

const Introduction = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introducing Layers</Tag>
        </div>
        <div className="text-4xl text-center font-medium mt-10">
          <span>Your creative process deserves better.</span>
          <span> {text} </span>
          <span>That&apos;s why we built Layers.</span>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
