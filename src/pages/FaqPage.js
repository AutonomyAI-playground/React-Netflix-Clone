import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import SigninButton from "../components/Header/SigninButton";
import Seperator from "../components/Seperator/Seperator";
import AccordionCompound from "../compounds/AccordionCompound";
import FooterCompound from "../compounds/FooterCompound";

/**
 * FaqPage displays frequently asked questions in an accordion format.
 * Uses the home header style with navigation to signin.
 */
function FaqPage() {
  return (
    <>
      <HeaderWrapper className="header-wrapper-home">
        <NavBar className="navbar-home">
          <Logo />
          <SigninButton>Sign In</SigninButton>
        </NavBar>
      </HeaderWrapper>
      <Seperator />
      <AccordionCompound />
      <Seperator />
      <FooterCompound />
    </>
  );
}

export default FaqPage;
