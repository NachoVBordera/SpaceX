import "../components/upcommingLaunch.component";
import "../components/lastLaunch.component";
import "../components/spacexHistory.component";
import "../ui/logoSpaceX.ui";
import { LitElement, html } from "lit";

export class HomePage extends LitElement {
  static get properties() {
    return {};
  }

  async connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <section class="launchesSection">
        <main-logo></main-logo>
        <upcomning-launch></upcomning-launch>
        <last-launch></last-launch>
      </section>
      <spacex-history></spacex-history>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("home-page", HomePage);
