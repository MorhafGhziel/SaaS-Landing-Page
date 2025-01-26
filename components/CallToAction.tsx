import React from "react";

const CallToAction = () => {
  return (
    <section>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i}>
          <span>&#10038;</span>
          <span>Try it for free</span>
        </div>
      ))}
    </section>
  );
};

export default CallToAction;
