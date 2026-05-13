import AccordionPage from "./AccordionPage";

/**
 * Storybook story for AccordionPage.
 * Displays the full FAQ page with accordion and footer.
 */
export default {
  title: "Pages/AccordionPage",
  component: AccordionPage,
  parameters: {
    layout: "fullscreen", // fullscreen to show complete page layout without padding
  },
};

export const Default = {};
