import React from "react";
import Tag from "./Tag";
import { features } from "@/constants";
import FeatureCard from "./FeatureCard";
import Image from "next/image";
import avatar1 from "@/public/avatar-ashwin-santiago.jpg";
import avatar2 from "@/public/avatar-lula-meyers.jpg";
import avatar3 from "@/public/avatar-florence-shaw.jpg";
import Avatar from "./Avatar";

const Features = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>

        <h2 className="text-6xl font-medium text-center mt-6">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8">
          <FeatureCard
            title="Real-time Collaboration"
            description="Work together seamlessly with contlict-tree team editing"
          >
            <div>
              <Avatar>
                <Image src={avatar1} alt="Avatar One" />
              </Avatar>
              <Avatar>
                <Image src={avatar2} alt="Avatar Two" />
              </Avatar>
              <Avatar>
                <Image src={avatar3} alt="Avatar Three" />
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Interactive Prototyping"
            description="Engage your clients with prototypes that react to user actions"
          ></FeatureCard>
          <FeatureCard
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create desians more quickly"
          ></FeatureCard>
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
