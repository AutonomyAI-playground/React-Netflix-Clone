import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import SigninButton from "../components/Header/SigninButton";
import FeatureWrapper from "../components/Header/FeatureWrapper";
import FeatureTitle from "../components/Header/FeatureTitle";
import Warning from "../components/Header/Warning";
import FeatureSubTitle from "../components/Header/FeatureSubTitle";

function HeaderCompound({ children }) {
  return (
    <HeaderWrapper className="header-wrapper-home">
      <NavBar className="navbar-home">
        <Logo />
        <SigninButton>Sign In</SigninButton>
      </NavBar>
      <FeatureWrapper className="feature-wrapper-home">
        <FeatureTitle className="feature-title-home" style={{ color: "green" }}>
          Let&apos;s Find Your Ideal Space
        </FeatureTitle>
        <FeatureSubTitle className="feature-subtitle-home">
          Discover residential and commercial properties tailored to your needs
        </FeatureSubTitle>
        <Warning>This is NOT official Netflix</Warning>
      </FeatureWrapper>
      {children}
    </HeaderWrapper>
  );
}

export default HeaderCompound;
