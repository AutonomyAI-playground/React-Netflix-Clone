import React from "react";
import AccordionCompound from "./AccordionCompound";

export default {
  title: "Compounds/AccordionCompound",
  component: AccordionCompound,
  parameters: {
    layout: "fullscreen",
  },
};

const DefaultRender = () => <AccordionCompound />;
DefaultRender.displayName = "DefaultRender";

export const Default = {
  render: DefaultRender,
};

const InteractiveTestRender = () => (
  <div style={{ padding: "20px", minHeight: "100vh" }}>
    <div
      style={{
        marginBottom: "20px",
        padding: "15px",
        backgroundColor: "#333",
        borderRadius: "5px",
        fontSize: "14px",
        lineHeight: "1.6",
      }}
    >
      <h3 style={{ margin: "0 0 10px", color: "#e50914" }}>
        Test Instructions:
      </h3>
      <ol style={{ margin: 0, paddingLeft: "20px" }}>
        <li>
          <strong>Animations:</strong>
          {" "}
          Click any header - body should smoothly expand/collapse (0.3s
          transition)
        </li>
        <li>
          <strong>Single-item-open:</strong>
          {" "}
          Open one item, then click another - the first should close
          automatically
        </li>
        <li>
          <strong>Keyboard navigation:</strong>
          {" "}
          Tab to a header, press Enter or Space to toggle
        </li>
        <li>
          <strong>Accessibility:</strong>
          {" "}
          Headers have role=&quot;button&quot;, aria-expanded, aria-controls.
          Bodies have role=&quot;region&quot;, aria-labelledby
        </li>
      </ol>
    </div>
    <AccordionCompound />
  </div>
);
InteractiveTestRender.displayName = "InteractiveTestRender";

export const InteractiveTest = {
  render: InteractiveTestRender,
};
