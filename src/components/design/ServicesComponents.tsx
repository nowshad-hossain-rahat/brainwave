import React from "react";
import { brainwaveWhiteSymbol, gradient, play } from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";
import "../../assets/scss/ServicesComponent.scss"
export const Gradient = () => {
  return (
    <div className="gradient-img-container">
      <img
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const PhotoChatMessage = () => {
  return (
    // <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
    <div className="photo-chat-content"> 
      Hey Brainwave, enhance this photo
      <ChatBubbleWing className="chat-bubble-wing-photo" />
    </div>
  );
};

export const VideoChatMessage = () => {
  return (
    <div className="video-chat-message">
      Video generated!
      <div className="video-chat-message-img-container">
        <img
          src={brainwaveWhiteSymbol}
          width={26}
          height={26}
          alt="Brainwave"
        />
      </div>
      <p>
        just now
      </p>
      <ChatBubbleWing
       className="chat-bubble-wing-video"

        pathClassName="fill-n-6"
      />
    </div>
  );
};

export const VideoBar = () => {
  return (
    <div className="video-bar">
      <img
        src={play}
        width={24}
        height={24}
        alt="Play"
      />

      <div className="bar-line">
        <div></div>
      </div>
    </div>
  );
};
