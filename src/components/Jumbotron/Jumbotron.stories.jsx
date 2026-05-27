import React from "react";
import JumboCompound from "../../compounds/JumboCompound";
import JumboWrapper from "./JumboWrapper";
import JumboItem from "./JumboItem";
import JumboTextWrapper from "./JumpoTextWrapper";
import JumboTitle from "./JumboTitle";
import JumboSubTitle from "./JumboSubTitle";
import JumboImageWrapper from "./JumboImageWrapper";
import JumboImage from "./JumboImage";
import Seperator from "../Seperator/Seperator";

export default {
  title: "Compounds/Jumbotron",
  parameters: {
    layout: "fullscreen",
  },
};

// Full compound with all jumbo data
export const JumboCompoundStory = {
  name: "JumboCompound (Full)",
  render: () => <JumboCompound />,
};

// Single Jumbotron item demonstrating building blocks
export const SingleJumboItem = {
  name: "Single Jumbo Item",
  render: () => (
    <JumboWrapper>
      <JumboItem>
        <JumboTextWrapper>
          <JumboTitle>Enjoy on your TV.</JumboTitle>
          <JumboSubTitle>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </JumboSubTitle>
        </JumboTextWrapper>
        <JumboImageWrapper>
          <JumboImage
            src="/images/misc/home-tv.jpg"
            alt="Tiger King on Netflix"
          />
        </JumboImageWrapper>
      </JumboItem>
    </JumboWrapper>
  ),
};

// Two items with separator showing layout
export const TwoItemsWithSeparator = {
  name: "Two Items with Separator",
  render: () => (
    <JumboWrapper>
      <JumboItem>
        <JumboTextWrapper>
          <JumboTitle>Download your programmes to watch on the go.</JumboTitle>
          <JumboSubTitle>
            Save your data and watch all your favourites offline.
          </JumboSubTitle>
        </JumboTextWrapper>
        <JumboImageWrapper>
          <JumboImage
            src="/images/misc/home-mobile.jpg"
            alt="Mobile downloads"
          />
        </JumboImageWrapper>
      </JumboItem>
      <Seperator />
      <JumboItem>
        <JumboTextWrapper>
          <JumboTitle>Watch everywhere.</JumboTitle>
          <JumboSubTitle>
            Stream unlimited films and TV programmes on your phone, tablet,
            laptop and TV without paying more.
          </JumboSubTitle>
        </JumboTextWrapper>
        <JumboImageWrapper>
          <JumboImage
            src="/images/misc/home-imac.jpg"
            alt="Money Heist on Netflix"
          />
        </JumboImageWrapper>
      </JumboItem>
    </JumboWrapper>
  ),
};

// Individual building blocks
export const JumboTitleOnly = {
  name: "JumboTitle",
  render: () => (
    <div style={{ padding: "20px" }}>
      <JumboTitle>Enjoy on your TV.</JumboTitle>
    </div>
  ),
};

export const JumboSubTitleOnly = {
  name: "JumboSubTitle",
  render: () => (
    <div style={{ padding: "20px" }}>
      <JumboSubTitle>
        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
        players and more.
      </JumboSubTitle>
    </div>
  ),
};

export const JumboImageOnly = {
  name: "JumboImage",
  render: () => (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <JumboImageWrapper>
        <JumboImage
          src="/images/misc/home-tv.jpg"
          alt="Tiger King on Netflix"
        />
      </JumboImageWrapper>
    </div>
  ),
};

export const JumboTextWrapperOnly = {
  name: "JumboTextWrapper",
  render: () => (
    <JumboTextWrapper>
      <JumboTitle>Custom Title Here</JumboTitle>
      <JumboSubTitle>
        Custom subtitle with description text goes here.
      </JumboSubTitle>
    </JumboTextWrapper>
  ),
};
