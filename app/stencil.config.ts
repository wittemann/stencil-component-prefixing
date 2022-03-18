import { Config } from "@stencil/core";

// https://stenciljs.com/docs/config

export const config: Config = {
  taskQueue: "async",
  globalScript: "./src/global/app.ts",
  outputTargets: [
    {
      type: "www",
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: "https://myapp.local/",
    },
  ],
};
