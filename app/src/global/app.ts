import { defineCustomElements, init } from "lib/dist/components/";

// ---------------------
// OPTION 1
// ---------------------
defineCustomElements({
  transformTagName: (name, Comp, register) => {
    const newName = "prefix-" + name;
    customElements.define(newName, Comp);
    register(name, newName);
  },
});

// ---------------------
// OPTION 2
// ---------------------
// init("prefix-");
