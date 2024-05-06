import React from "react";
import { background } from "../../assets";

export const Rings = () => {
  return (
    <div className="rings">
      <div></div>
      <div></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="side-line left"></div>
      <div className="side-line right"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="bg-circle first"></div>
      <div className="bg-circle second"></div>
      <div className="bg-circle third"></div>
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="hamburger">
      <div className="bg">
        <img
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      <Rings />

      <SideLines />

      <BackgroundCircles />
    </div>
  );
};
