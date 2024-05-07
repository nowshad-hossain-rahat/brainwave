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

export default function Services() {
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

              <div className="photo-content">
                <h4>Photo editing</h4>
                <p className="body-2">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="video">
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

              <div className="video-img-container">
                <img
                  src={service3}
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
