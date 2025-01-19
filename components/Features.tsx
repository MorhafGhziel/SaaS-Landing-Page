import React from "react";
import Tag from "./Tag";
import { features } from "@/constants";
import FeatureCard from "./FeatureCard";
import Image from "next/image";
import avatar1 from "@/public/avatar-ashwin-santiago.jpg";
import avatar2 from "@/public/avatar-lula-meyers.jpg";
import avatar3 from "@/public/avatar-florence-shaw.jpg";
import Avatar from "./Avatar";
import Key from "./Key";

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
            <div className="aspect-video flex justify-center items-center">
              <Avatar className="z-40">
                <Image
                  src={avatar1}
                  alt="Avatar One"
                  className="rounded-full"
                />
              </Avatar>
              <Avatar className="-ml-6 border-indigo-500 z-30">
                <Image
                  src={avatar2}
                  alt="Avatar Two"
                  className="rounded-full"
                />
              </Avatar>
              <Avatar className="-ml-6 border-amber-500 z-20">
                <Image
                  src={avatar3}
                  alt="Avatar Three"
                  className="rounded-full"
                />
              </Avatar>
              <Avatar className="-ml-6 border-transparent">
                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      className="size-1.5 rounded-full bg-white inline-flex"
                      key={i}
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Interactive Prototyping"
            description="Engage your clients with prototypes that react to user actions"
          >
            <div className="aspect-video flex items-center justify-center">
              <p className="text-4xl font-extrabold text-white/20 text-center">
                We&apos;ve achieved{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  incredible
                </span>{" "}
                growth this year
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create desians more quickly"
          >
            {" "}
            <div className="aspect-video flex items-center justify-center gap-4">
              <Key className="w-28">shift</Key>
              <Key>alt</Key>
              <Key>C</Key>
            </div>
          </FeatureCard>
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
