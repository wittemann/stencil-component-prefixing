import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "lib",
  // no official docs for nodeResolve on stencil, its a default rollup plugin though which stencil mentions in the docs
  nodeResolve: {
    only: [""],
  },
  outputTargets: [
    {
      type: "dist-custom-elements",
      externalRuntime: false, // no official docs, only a workaround in https://github.com/ionic-team/stencil/issues/3206
    },
    {
      type: "www",
      serviceWorker: null,
    },
  ],
};
