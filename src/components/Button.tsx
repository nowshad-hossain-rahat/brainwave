import React from "react";
import ButtonSvg from "../assets/svg/ButtonSvg";
import "../assets/scss/Button.scss";

const Button = ({ className, href, onClick, children, px, white }: {
  className: string;
  href: string;
  onClick: () => any;
  children: any;
  px?: string;
  white?: boolean;
}) => {
  const classes = `button h-11 ${
    px || "px-7"
  } ${white ? "color-black" : "color-white"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
