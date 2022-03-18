import { Component } from "@stencil/core";
import { h } from "../../myH";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <div>
        Hello, World! <my-child></my-child>
      </div>
    );
  }
}
