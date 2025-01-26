import React from "react";
import Tag from "./Tag";
import { faqs } from "@/constants";

const Faqs = () => {
  return (
    <section>
      <div className="container">
        <Tag>Faqs</Tag>
        <h2>
          Questions? We&apos;ve got <span>answers</span>
        </h2>
        <div>
          {faqs.map((faq) => (
            <div key={faq.question}>
              <div>
                <h3>{faq.question}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
