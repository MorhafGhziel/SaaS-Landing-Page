import React from "react";

const FeatureCard = (props: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) => {
  const { title, description, children } = props;
  return (
    <div>
      <div>{children}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
