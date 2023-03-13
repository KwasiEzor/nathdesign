import React from "react";

const SectionTitle = ({ title }) => {
  return <h1 className="section-title">{title ?? `Section Title`}</h1>;
};

export default SectionTitle;
