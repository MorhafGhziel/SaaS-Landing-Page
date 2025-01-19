import React from "react";
import { text } from "@/constants";

const Introduction = () => {
  return (
    <section>
      <div className="container">
        <div>* Introducing Layers</div>
        <div>
          <span>Your creative process deserves better.</span>
          <span> {text} </span>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
