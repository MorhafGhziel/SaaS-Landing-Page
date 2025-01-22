import React from "react";
import Tag from "./Tag";
import { integrations } from "@/constants";
import Image from "next/image";
import IntegrationsColumn from "./IntegrationsColumn";

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
      <div className="h-[400px] mt-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
        <IntegrationsColumn integrations={integrations} />
        <IntegrationsColumn integrations={integrations.slice().reverse()} />
      </div>
    </section>
  );
};

export default Integrations;
