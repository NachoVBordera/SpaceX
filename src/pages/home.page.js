import "../components/upcommingLaunch.component";
import "../components/lastLaunch.component";
import "../components/spacexHistory.component";
import "../ui/logoSpaceX.ui";

export class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="launchesSection">
        <main-logo></main-logo>
        <upcomning-launch></upcomning-launch>
        <last-launch></last-launch>
      </section>
      <spacex-history></spacex-history>
    `;
  }
}

customElements.define("home-page", HomePage);
