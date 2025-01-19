import React from "react";
import Tag from "./Tag";
import { features } from "@/constants";

const Features = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>

        <h2 className="text-6xl font-medium text-center mt-6">
          Where power meets <span>simplicity</span>
        </h2>
        <div>
          <div>
            <div></div>
            <div>
              <h3>Real-time Collaboration</h3>
              <p>Work together seamlessly with contlict-tree team editing</p>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <h3>Interactive Prototyping</h3>
              <p>
                Engage your clients with prototypes that react to user actions
              </p>
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <h3>Keyboard Quick Actions</h3>
              <p>Powerful commands to help you create desians more quickly</p>
            </div>
          </div>
        </div>
        <div>
          {features.map((feature) => (
            <div key={feature}>
              <span></span>
              <span> {feature} </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
