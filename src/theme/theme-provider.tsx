import { ThemeProvider, ThemeOptions, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode } from "react";
import getThemeOptions from "./theme";

interface ContractLabsThemeProviderProps {
  children: ReactNode;
  theme?: ThemeOptions; // Allows custom overrides
  mode?: "light" | "dark"; // Allow user to specify light/dark mode
}

const createMergedTheme = (mode: "light" | "dark", customTheme?: ThemeOptions) => {
  return createTheme({
    ...getThemeOptions(mode), // Correctly get the theme for the specified mode
    ...customTheme, // Merge user-provided overrides
  });
};

const ContractLabsThemeProvider: React.FC<ContractLabsThemeProviderProps> = ({
  theme,
  mode = "light", // Default to light mode
  children,
}) => {
  const mergedTheme = createMergedTheme(mode, theme);

  return (
    <ThemeProvider theme={mergedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ContractLabsThemeProvider;
