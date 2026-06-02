import React from "react";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import SigninButton from "../components/Header/SigninButton";
import AccordionCompound from "../compounds/AccordionCompound";
import Seperator from "../components/Seperator/Seperator";
import FooterCompound from "../compounds/FooterCompound";

/**
 * AccordionPage - FAQ page displaying frequently asked questions in an accordion layout.
 *
 * Renders a simple header (logo + sign-in button) without the full home page hero,
 * followed by the accordion compound for FAQ items, then footer.
 */
function AccordionPage() {
  return (
    <>
      <HeaderWrapper className="header-wrapper-accordion">
        <NavBar className="navbar-accordion">
          <Logo />
          <SigninButton>Sign In</SigninButton>
        </NavBar>
      </HeaderWrapper>
      <AccordionCompound />
      <Seperator />
      <FooterCompound />
    </>
  );
}

export default AccordionPage;
