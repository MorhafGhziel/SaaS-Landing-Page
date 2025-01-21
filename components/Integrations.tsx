import React from "react";
import Tag from "./Tag";
import { integrations } from "@/constants";
import Image from "next/image";

const Integrations = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="flex justify-center items-center">
          <Tag>Integrations</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6">
          Plays well with <span className="text-lime-400">others</span>
        </h2>
        <p className="text-white/50 mt-4 text-lg">
          Layels seattless connects wil vour lavore loois, makine it easy to
          plug into any workflow and collaborate across olatorms
        </p>
      </div>
      <div className="flex flex-col gap-4 pb-4">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
          >
            <div className="flex justify-center">
              <Image
                src={integration.icon}
                alt={integration.name}
                width={96}
                height={96}
              />
            </div>
            <h3 className="text-3xl text-center mt-6"> {integration.name} </h3>
            <p className="text-center text-white/50 mt-2">
              {" "}
              {integration.description}{" "}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Integrations;
