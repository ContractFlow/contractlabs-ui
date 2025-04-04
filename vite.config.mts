import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/fonts/inter",
          dest: "assets/fonts/inter",
        },
        {
          src: "src/assets/fonts/space-grotesk",
          dest: "assets/fonts/space-grotesk",
        },
        {
          src: "src/assets/fonts/fira-sans",
          dest: "assets/fonts/fira-sans",
        },
        {
          src: "src/styles",
          dest: "styles",
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ContractLabsUI",
      formats: ["es"],
      fileName: (format) => `contractlabs-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@emotion/react", "@emotion/styled", "@mui/material"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
