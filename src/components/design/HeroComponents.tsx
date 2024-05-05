import React from "react";
import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import PlusSvg from "../../assets/svg/PlusSvg";
import "../../assets/scss/Hero.scss";

export const Gradient = () => {
  return (
    <>
      <div className="gradient-first-div shadow-xl" />
      <div className="gradient-second-div shadow-xl" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="bottomLine-div pointer-events-none xl:block" />

      <PlusSvg className="bottomLine-plussvg" />

      <PlusSvg className="bottomLine-plussvg" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="rings-first-div -translate-x-1/2 -translate-y-1/2" />
      <div className="rings-first-div  -translate-x-1/2 -translate-y-1/2" />
      <div className="rings-first-div -translate-x-1/2 -translate-y-1/2" />
      <div className="rings-first-div -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export const BackgroundCircles = ({ parallaxRef }: { parallaxRef?: any }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="backgroundCircles-main -translate-x-1/2">
      <Rings />

      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="mouseparallax-main rotate-46deg">
          <div
            className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="mouseparallax-main rotate-ms-56deg">
          <div
            className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="mouseparallax-main rotate-54deg">
          <div
            className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="mouseparallax-main rotate-ms-65deg">
          <div
            className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="mouseparallax-main rotate-ms-58deg">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        <div className="mouseparallax-main rotate-70deg">
          <div
            className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          />
        </div>
      </MouseParallax>
    </div>
  );
};
