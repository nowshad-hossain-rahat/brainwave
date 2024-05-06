import React from "react";
import { benefits } from "../constants";
import Heading from "./Heading.tsx";
import Section from "./Section.tsx";
import Arrow from "../assets/svg/Arrow.tsx";
import { GradientLight } from "./design/GradientLight.tsx";
import ClipPath from "../assets/svg/ClipPath.tsx";
import "../assets/scss/Benefits.scss";

const Benefits = () => {
  return (
    <Section id="features" className="benefits-section">
      <div className="content container ">
        <Heading
          className="from-benefits"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className=" body">
          {benefits.map((item) => (
            <div
              className="items"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="item-1">
                <h5>{item.title}</h5>
                <p>{item.text}</p>
                <div>
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p>Explore more</p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div className="item-2" style={{ clipPath: "url(#benefits)" }}>
                <div>
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
