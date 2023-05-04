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
      <upcomning-launch></upcomning-launch>
      <spacex-history></spacex-history>
      <last-launch></last-launch>
      <nav>
        <a href="/">HOME</a>
        <a href="/launches">LAUNCHES</a>
      </nav>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("launches-page", LaunchesPages);
