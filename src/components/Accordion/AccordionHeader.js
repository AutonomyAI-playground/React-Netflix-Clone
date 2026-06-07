import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";
import "./AccordionStyles.css";

function AccordionHeader({ children, ...restProps }) {
  const [accordionShow, setAccordionShow] = useContext(AccordionContext);

  const handleClick = () => {
    setAccordionShow(!accordionShow);
  };

  return (
    <div className="accordion-header" onClick={handleClick} {...restProps}>
      {children}
      {/* Toggle between close and add icons based on expanded state */}
      {accordionShow ? (
        <img
          className="accordion-image"
          src="../images/icons/close-slim.png"
          alt="Close"
        />
      ) : (
        <img
          className="accordion-image"
          src="../images/icons/add.png"
          alt="Open"
        />
      )}
    </div>
  );
}

export default AccordionHeader;
