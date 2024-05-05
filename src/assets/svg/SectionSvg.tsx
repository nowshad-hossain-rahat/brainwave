import React from "react";
import PlusSvg from "./PlusSvg";

const SectionSvg = ({ crossesOffset }: { crossesOffset?: string }) => {
  return (
    <>
      <PlusSvg
        className={`plussvg div-1 ${
          crossesOffset && crossesOffset
        }  `}
      />

      <PlusSvg
        className={`plussvg div-2 ${
          crossesOffset && crossesOffset
        }`}
      />
    </>
  );
};

export default SectionSvg;
