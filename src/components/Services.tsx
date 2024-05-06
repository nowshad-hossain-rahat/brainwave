import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/ServicesComponents";

import Generating from "./Generating";
import "../assets/scss/Services.scss";
const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container services-section">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="content">
          <div className="smart-ai">
            <div className="img-container">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="content">
              <h4>Smartest AI</h4>
              <p className="body-2">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                  >
                    <img width={24} height={24} src={check} />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="from-services-section" />
          </div>

          <div className="photo-and-video">
            <div className="photo">
              <div className="img-container">
                <img
                  src={service2}
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="video p-4 ">
              <div className="video-content">
                <h4>Video generation</h4>
                <p className="body-2">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul>
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`${
                        index === 2
                          ? "index-2-true"
                          : "index-2-false"
                      }`}
                    >
                       <div
                        className={
                          index === 2
                            ? "index-2-true"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
