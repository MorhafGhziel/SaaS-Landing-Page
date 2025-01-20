import React from "react";
import Tag from "./Tag";
import { integrations } from "@/constants";
import Image from "next/image";

const Integrations = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-center items-center">
          <Tag>Integrations</Tag>
        </div>
        <h2>
          Plays well with <span>others</span>
        </h2>
        <p>
          Layels seattless connects wil vour lavore loois, makine it easy to
          plug into any workflow and collaborate across olatorms
        </p>
      </div>
      <div>
        {integrations.map((integration) => (
          <div key={integration.name}>
            <div>
              {" "}
              <Image
                src={integration.icon}
                alt={integration.name}
                width={96}
                height={96}
              />{" "}
            </div>
            <h3> {integration.name} </h3>
            <p> {integration.description} </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Integrations;
