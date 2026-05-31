import React from "react";
import "./SpacesLandingStyles.css";

// Maps social platform names to their display icons
const SOCIAL_ICONS = {
  facebook: "●",
  linkedin: "in",
  instagram: "◉",
  youtube: "▶",
};

function SpacesSocialIcon({ platform, ...restProps }) {
  return (
    <a
      className="spaces-social-icon"
      href="#"
      aria-label={platform}
      onClick={(e) => e.preventDefault()}
      {...restProps}
    >
      {SOCIAL_ICONS[platform] || "○"}
    </a>
  );
}

export default SpacesSocialIcon;
