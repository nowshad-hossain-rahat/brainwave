import React from "react";
import { gradient } from "../../assets";
import "../../assets/scss/Gradient.scss";

export const Gradient = () => {
  return (
    <div className="gradient-main">
      <div>
        <img
          src={gradient}
          width={942}
          height={942}
          alt="Gradient"
        />
      </div>
    </div>
  );
};
