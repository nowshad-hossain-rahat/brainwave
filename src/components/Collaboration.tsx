import React from "react";
import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/RightLeftCurve";
import "../assets/scss/Collaboration.scss";
const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container collaborate-section">
        <div className="left-side">
          <h2>
            AI Chat App for seamless collaboration
          </h2>

          <ul>
            {collabContent.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Try it now</Button>
        </div>

        <div className="right-side">
          <p className="body-2">
            {collabText}
          </p>

          <div className="design-container">
            <div className="design-content">
              <div>
                <div>
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                style={{transform:`rotate(${index * 45 }deg)`}}
                  key={app.id}
                  
                >
                  <div
                  style={{transform:`rotate(-${index * 45 }deg)`}}
                   
                  >
                    <img
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
