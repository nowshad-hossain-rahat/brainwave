import SectionSvg from "../assets/svg/SectionSvg";
import "../assets/scss/Section.scss";

export default function Section({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}: {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: boolean;
  children: any;
}) {
  return (
    <div
      id={id}
      className={`
      main-container 
      ${
        customPaddings ?? `if-no-custom-paddings ${crosses ? "if-crosses" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      <div className="container-div div-1" />
      <div className="container-div div-2" />

      {crosses && (
        <>
          <div
            className={`crosses-and-div ${crossesOffset && crossesOffset}`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
}
