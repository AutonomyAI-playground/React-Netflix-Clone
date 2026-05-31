import React from "react";
import SpacesLandingWrapper from "../components/SpacesLanding/SpacesLandingWrapper";
import SpacesNavBar from "../components/SpacesLanding/SpacesNavBar";
import SpacesLogo from "../components/SpacesLanding/SpacesLogo";
import SpacesButton from "../components/SpacesLanding/SpacesButton";
import SpacesLanguageSelector from "../components/SpacesLanding/SpacesLanguageSelector";
import SpacesHero from "../components/SpacesLanding/SpacesHero";
import SpacesHeroTitle from "../components/SpacesLanding/SpacesHeroTitle";
import SpacesHeroSubtitle from "../components/SpacesLanding/SpacesHeroSubtitle";
import SpacesTabs from "../components/SpacesLanding/SpacesTabs";
import SpacesTab from "../components/SpacesLanding/SpacesTab";
import SpacesSearchForm from "../components/SpacesLanding/SpacesSearchForm";
import SpacesFormInput from "../components/SpacesLanding/SpacesFormInput";
import SpacesFormSelect from "../components/SpacesLanding/SpacesFormSelect";
import SpacesToggle from "../components/SpacesLanding/SpacesToggle";
import SpacesToggleButton from "../components/SpacesLanding/SpacesToggleButton";
import SpacesPriceRange from "../components/SpacesLanding/SpacesPriceRange";
import SpacesFooter from "../components/SpacesLanding/SpacesFooter";
import SpacesFooterContent from "../components/SpacesLanding/SpacesFooterContent";
import SpacesFooterLink from "../components/SpacesLanding/SpacesFooterLink";
import SpacesSocialIcon from "../components/SpacesLanding/SpacesSocialIcon";

/**
 * SpacesLandingPage - Main landing page for the SuddenlySpaces property rental platform.
 * Allows users to search for commercial and residential properties with various filters.
 */
function SpacesLandingPage() {
  // Track which property type tab is selected (commercial/residential)
  const [activeTab, setActiveTab] = React.useState("commercial");
  // Track rental frequency preference (hourly/monthly)
  const [rentalType, setRentalType] = React.useState("hourly");

  return (
    <SpacesLandingWrapper>
      {/* Header Navigation */}
      <SpacesNavBar>
        <SpacesLogo />
        <div className="spaces-navbar-actions">
          <SpacesButton>Switch to Tenant</SpacesButton>
          <SpacesButton variant="primary">List Your Space</SpacesButton>
          <SpacesLanguageSelector />
          <SpacesButton>Sign Up</SpacesButton>
          <SpacesButton>Login</SpacesButton>
        </div>
      </SpacesNavBar>

      {/* Hero Section */}
      <SpacesHero>
        <SpacesHeroTitle>Let&apos;s Find Your Ideal Space</SpacesHeroTitle>
        <SpacesHeroSubtitle>
          Discover residential and commercial properties tailored to your needs
        </SpacesHeroSubtitle>

        {/* Tabs */}
        <SpacesTabs>
          <SpacesTab
            active={activeTab === "commercial"}
            onClick={() => setActiveTab("commercial")}
          >
            Commercial
          </SpacesTab>
          <SpacesTab
            active={activeTab === "residential"}
            onClick={() => setActiveTab("residential")}
          >
            Residential
          </SpacesTab>
        </SpacesTabs>

        {/* Search Form */}
        <SpacesSearchForm>
          <SpacesFormInput label="Location" placeholder="Type a location" />
          <SpacesFormSelect label="Property Type">
            <option>Select</option>
            <option>Office</option>
            <option>Retail</option>
            <option>Warehouse</option>
          </SpacesFormSelect>
          <div className="spaces-form-group">
            <span className="spaces-form-label">Rental Frequency</span>
            <SpacesToggle>
              <SpacesToggleButton
                active={rentalType === "hourly"}
                onClick={() => setRentalType("hourly")}
              >
                Hourly
              </SpacesToggleButton>
              <SpacesToggleButton
                active={rentalType === "monthly"}
                onClick={() => setRentalType("monthly")}
              >
                Monthly
              </SpacesToggleButton>
            </SpacesToggle>
          </div>
          <SpacesFormSelect label="Space Type">
            <option>Select</option>
            <option>Shared</option>
            <option>Private</option>
            <option>Dedicated</option>
          </SpacesFormSelect>
          <SpacesPriceRange label="Price" minValue="500" maxValue="2500" />
          <button type="button" className="spaces-search-button">Search</button>
        </SpacesSearchForm>
      </SpacesHero>

      {/* Footer */}
      <SpacesFooter>
        <SpacesFooterContent>
          <div className="spaces-footer-left">
            <span className="spaces-footer-copyright">
              © SuddenlySpaces, 2024
            </span>
          </div>
          <div className="spaces-footer-center">
            <span className="spaces-footer-copyright">Company</span>
            <SpacesFooterLink>About</SpacesFooterLink>
            <SpacesFooterLink>Careers</SpacesFooterLink>
            <SpacesFooterLink>Press</SpacesFooterLink>
            <SpacesFooterLink>Contact Us</SpacesFooterLink>
          </div>
          <div className="spaces-footer-right">
            <div className="spaces-footer-social">
              <SpacesSocialIcon platform="facebook" />
              <SpacesSocialIcon platform="linkedin" />
              <SpacesSocialIcon platform="instagram" />
              <SpacesSocialIcon platform="youtube" />
            </div>
            <SpacesFooterLink>Terms of Use</SpacesFooterLink>
            <SpacesFooterLink>Privacy Policy</SpacesFooterLink>
          </div>
        </SpacesFooterContent>
      </SpacesFooter>
    </SpacesLandingWrapper>
  );
}

export default SpacesLandingPage;
