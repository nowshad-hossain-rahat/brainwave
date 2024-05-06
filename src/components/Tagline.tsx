import React from "react";
import brackets from "../assets/svg/Brackets";
import "../assets/scss/Tagline.scss";

const TagLine = ({
  className,
  children,
}: {
  className?: string;
  children?: any;
}) => {
  return (
    <div className={`tag-line ${className || ""}`}>
      {brackets("left")}
      <div>{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
