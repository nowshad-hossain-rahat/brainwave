import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import PlusSvg from "../../assets/svg/PlusSvg";
import "../../assets/scss/HeroComponents.scss";

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
      <div className="bottom-line" />

      <PlusSvg className="bottom-line-plus" />

      <PlusSvg className="bottom-line-plus right" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="rings-main w-65-rem" />
      <div className="rings-main w-51-rem" />
      <div className="rings-main w-36-rem" />
      <div className="rings-main w-23-rem" />
    </>
  );
};

export const BackgroundCircles = ({ parallaxRef }: { parallaxRef?: any }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="background-circles-main">
      <Rings />

      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="mouseparallax-main rotate-46deg">
          <div
            className={`mouseparallax-div1 ${
              mounted ? "mounted-true" : "mounted-false"
            }`}
          />
        </div>

        <div className="mouseparallax-main rotate-ms-56deg">
          <div
            className={` mouseparallax-div2 ${
              mounted ? "mounted-true" : "mounted-false"
            }`}
          />
        </div>

        <div className="mouseparallax-main rotate-54deg">
          <div
            className={`mouseparallax-div3 ${
              mounted ? "mounted-true" : "mounted-false"
            }`}
          />
        </div>

        <div className="mouseparallax-main rotate-ms-65deg">
          <div
            className={`mouseparallax-div4 ${
              mounted ? "mounted-true" : "mounted-false"
            }`}
          />
        </div>

        <div className="mouseparallax-main rotate-ms-58deg">
          <div
            className={`mouseparallax-div5 ${
              mounted ? "mounted-true" : "mounted-false"
            }`}
          />
        </div>

        <div className="mouseparallax-main rotate-70deg">
          <div
            className={`mouseparallax-div6 ${
              mounted ? "mounted-true" : "mounted-false"
            }`}
          />
        </div>

      </MouseParallax>
    </div>
  );
};
