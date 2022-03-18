import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Application</h1>
        </header>

        <prefix-my-component></prefix-my-component>
      </div>
    );
  }
}
