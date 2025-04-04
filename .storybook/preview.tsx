import React from "react";
import type { Decorator, Preview } from "@storybook/react";
import { ContractLabsThemeProvider } from "../src/theme"; 

const withThemeProvider: Decorator = (Story, context) => {
  const mode = context.globals.themeMode || "light"; 
  
  return (
    <ContractLabsThemeProvider mode={mode}>
      <Story />
    </ContractLabsThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      docsPage: true,
    },
  },
  decorators: [withThemeProvider],

  // Define global toolbar controls
  globalTypes: {
    themeMode: {
      name: "Theme Mode",
      description: "Global theme mode for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow", // Icon in the toolbar
        items: [
          { value: "light", title: "Light Mode" },
          { value: "dark", title: "Dark Mode" },
        ],
        showName: true,
      },
    },
  },
};

export default preview;
