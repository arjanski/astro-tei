import { defineConfig } from "astro/config";

// https://astro.build/config

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    assetsInclude: "**/*.xml",
  },
});
