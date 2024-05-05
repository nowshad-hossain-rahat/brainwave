import React from "react";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/HeroComponents";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import "../assets/scss/Hero.scss"
const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="hero-section-container"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="content" ref={parallaxRef}>
        <div className="intro">
          <h1 className="heading">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span>
              Brainwave{" "}
              <img
                src={curve}
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>

          <p>
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>

          <Button href="/pricing" white>
            Get started
          </Button>
        </div>

        <div className="banner">
          <div className="foreground">
            <div className="content">
              <div className="top-line"></div>

              <div className="body">
                <img
                  src={robot}
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="from-hero-section" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hero-icons">
                    {heroIcons.map((icon, index) => (
                      <li key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="from-hero-section"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <div className="background">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="company-logos" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
