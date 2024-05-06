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
      <div className="container  collaborate-section">
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

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
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
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
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
