import React from "react";
import AvatarWrapper from "../components/Avatar/AvatarWrapper";
import AvatarImage from "../components/Avatar/AvatarImage";
import "./AvatarPageStyles.css";

/**
 * AvatarPage displays a demo of the avatar component.
 * Shows a profile avatar with gradient border in a centered layout.
 */
function AvatarPage() {
  return (
    <div className="avatar-page-container">
      <AvatarWrapper>
        <AvatarImage src="./images/users/1.png" alt="Profile Avatar" />
      </AvatarWrapper>
    </div>
  );
}

export default AvatarPage;
