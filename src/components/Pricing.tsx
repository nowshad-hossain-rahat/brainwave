import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/PricingComponents";
import "../assets/scss/Pricing.scss";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="content container">
        <div className="graphics">
          <img
            src={smallSphere}
            className="sphere"
            width={255}
            height={255}
            alt="Sphere"
          />

          <div className="stars-container">
            <img src={stars} width={950} height={400} alt="Stars" />
          </div>
        </div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="bottom">
          <a href="/pricing">See the full details</a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
