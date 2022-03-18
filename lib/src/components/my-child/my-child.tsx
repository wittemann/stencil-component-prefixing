import { Component, Host } from "@stencil/core";
import * as SunCalc from "suncalc";
import { h } from "../../myH";

@Component({
  tag: "my-child",
  styleUrl: "my-child.css",
  shadow: true,
})
export class MyChild {
  render() {
    const times = SunCalc.getTimes(new Date(), 48.99963, 8.3855);
    return (
      <Host>
        <div>Sunset is at {times.sunset.toTimeString()}</div>
      </Host>
    );
  }
}
