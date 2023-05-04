import "../components/upcommingLaunch.component";
import "../components/lastLaunch.component";
import "../components/spacexHistory.component";
import "../ui/logoSpaceX.ui";
import { LitElement, html } from "lit";

export class LaunchesPages extends LitElement {
  static get properties() {
    return {};
  }

  async connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <h1>Launches Page</h1>
      <last-launch></last-launch>
      <spacex-history></spacex-history>
      <upcomning-launch></upcomning-launch>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("launches-page", LaunchesPages);
