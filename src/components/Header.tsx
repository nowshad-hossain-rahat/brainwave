import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/HeaderComponents";
import { useState } from "react";
import "../assets/scss/Header.scss";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  }, []);

  return (
    <header className={`${openNavigation ? "bg-black" : "bg-black-backdrop"}`}>
      <div className="content">
        <a className="logo" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>

        <nav className={`${openNavigation ? "nav-flex" : "nav-hidden"}`}>
          <div className="nav-ul">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`nav-item ${item.onlyMobile ? "only-mobile" : ""} ${
                  item.url === pathname.hash
                    ? "item-hash-true"
                    : "item-hash-false"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:inline-flex"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
