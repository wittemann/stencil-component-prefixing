import { registerTransform } from "./myH";
export { Components, JSX } from "./components";

import { MyComponent } from "./components/my-component/my-component";
import { MyChild } from "./components/my-child/my-child";

const components = {
  "my-component": MyComponent,
  "my-child": MyChild,
};

// ---------------------
// OPTION 1
// ---------------------
const defineCustomElements = function (options) {
  const transformTagName = options.transformTagName;
  if (transformTagName) {
    for (let name in components) {
      transformTagName(name, components[name], registerTransform);
    }
  }
};

// ---------------------
// OPTION 2
// ---------------------
// const init = function (prefix) {
//   for (let name in components) {
//     let newName = prefix + name;
//     let Comp = components[name];
//     customElements.define(newName, Comp as any);
//     registerTransform(name, newName, Comp);
//   }
// };

export { defineCustomElements };
