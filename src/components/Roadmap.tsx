import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Gradient";
import "../assets/scss/Roadmap.scss";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container content">
      <Heading tag="Ready to get started" title="What we’re working on" />

      <div className="body">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`roadmap-item ${
                item.colorful ? "bg-conic-gradient" : "bg-black"
              }`}
              key={item.id}
            >
              <div className="roadmap-content">
                <div className="background-graph">
                  <img
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                
                <div className="inner-container">
                  <div className="rm-header">
                    <Tagline>{item.date}</Tagline>

                    <div className="status">
                      <img
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />

                      <div className="tag-line">{status}</div>
                    </div>
                  </div>

                  <div className="concept">
                    <img
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>

                  <h4 className="title">{item.title}</h4>
                  <p className="text">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="bottom">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
