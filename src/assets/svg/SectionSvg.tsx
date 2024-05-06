import React from "react";
import PlusSvg from "./PlusSvg";

const SectionSvg = ({ crossesOffset }: { crossesOffset?: string }) => {
  return (
    <>
      <PlusSvg
        className={`bottom-line-plus section-svg ${crossesOffset && crossesOffset}  `}
      />

      <PlusSvg
        className={`bottom-line-plus section-svg right ${crossesOffset && crossesOffset}`}
      />
    </>
  );
};

export default SectionSvg;
