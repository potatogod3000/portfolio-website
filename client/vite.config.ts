import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: readFileSync(resolve("private-key.pem")),
      cert: readFileSync(resolve("certificate.crt")),
    },
  },
});
