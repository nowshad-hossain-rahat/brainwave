import React from "react";
import { loading } from "../assets";
import "../assets/scss/Generating.scss";

const Generating = ({ className }: { className?: string }) => {
  return (
    <div className={`generating ${className || ""}`}>
      <img src={loading} alt="Loading" />
      AI is generating
    </div>
  );
};

export default Generating;
