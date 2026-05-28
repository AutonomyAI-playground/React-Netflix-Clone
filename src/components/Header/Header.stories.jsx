import React from "react";
import { MemoryRouter } from "react-router-dom";

// Import all Header components
import HeaderWrapper from "./HeaderWrapper";
import NavBar from "./NavBar";
import Logo from "./Logo";
import SigninButton from "./SigninButton";
import HeaderLink from "./HeaderLink";
import PlayButton from "./PlayButton";
import Warning from "./Warning";
import FeatureWrapper from "./FeatureWrapper";
import FeatureTitle from "./FeatureTitle";
import FeatureSubTitle from "./FeatureSubTitle";

// Import HeaderCompound
import HeaderCompound from "../../compounds/HeaderCompound";

export default {
  title: "Components/Header",
  decorators: [
    // Wrap all stories with MemoryRouter for components that use routing
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};

// Full composition using the HeaderCompound with all nested components
export const ComposedHeader = () => <HeaderCompound />;

// Home page header with logo, sign-in button, and feature text
export const FullHeaderHome = () => (
  <HeaderWrapper className="header-wrapper-home">
    <NavBar className="navbar-home">
      <Logo />
      <SigninButton>Sign In</SigninButton>
    </NavBar>
    <FeatureWrapper className="feature-wrapper-home">
      <FeatureTitle className="feature-title-home">
        Unlimited movies, TV shows and more.
      </FeatureTitle>
      <FeatureSubTitle className="feature-subtitle-home">
        Watch anywhere. Cancel anytime.
      </FeatureSubTitle>
      <Warning>This is NOT official Netflix</Warning>
    </FeatureWrapper>
  </HeaderWrapper>
);

// Browse page header with navigation links and movie feature section
export const BrowseHeader = () => (
  <HeaderWrapper className="header-wrapper-browse">
    <NavBar className="navbar-browse">
      <Logo />
      <HeaderLink href="/films">Films</HeaderLink>
      <HeaderLink href="/series">Series</HeaderLink>
    </NavBar>
    <FeatureWrapper>
      <FeatureTitle className="feature-title-browse">
        Watch Joker Now
      </FeatureTitle>
      <FeatureSubTitle className="feature-subtitle-browse">
        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection
        as he walks the streets of Gotham City.
      </FeatureSubTitle>
      <PlayButton>Play</PlayButton>
    </FeatureWrapper>
  </HeaderWrapper>
);

// Individual component: Logo displayed in isolation
export const LogoOnly = () => (
  <div style={{ backgroundColor: "#000", padding: "20px" }}>
    <Logo />
  </div>
);

// Individual component: Sign In button displayed in isolation
export const SignInButtonOnly = () => (
  <div style={{ backgroundColor: "#000", padding: "20px" }}>
    <SigninButton>Sign In</SigninButton>
  </div>
);

// Individual component: Navigation links for browse page
export const HeaderLinks = () => (
  <div style={{ backgroundColor: "#000", padding: "20px", display: "flex" }}>
    <HeaderLink href="/films">Films</HeaderLink>
    <HeaderLink href="/series">Series</HeaderLink>
  </div>
);

// Individual component: Play button for video content
export const PlayButtonOnly = () => (
  <div style={{ backgroundColor: "#000", padding: "20px" }}>
    <PlayButton>Play</PlayButton>
  </div>
);

// Individual component: Warning banner for disclaimer text
export const WarningBanner = () => (
  <div style={{ backgroundColor: "#000", padding: "20px" }}>
    <Warning>This is NOT official Netflix</Warning>
  </div>
);

// Feature section with title and subtitle for home page hero
export const FeatureSection = () => (
  <div style={{ backgroundColor: "#000", padding: "40px" }}>
    <FeatureWrapper className="feature-wrapper-home">
      <FeatureTitle className="feature-title-home">
        Unlimited movies, TV shows and more.
      </FeatureTitle>
      <FeatureSubTitle className="feature-subtitle-home">
        Watch anywhere. Cancel anytime.
      </FeatureSubTitle>
    </FeatureWrapper>
  </div>
);
