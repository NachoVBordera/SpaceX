import "../components/launchesList.component";
import "../components/actuallStarlink.component";

export class LaunchesPages extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="launchesHeader">
        <alctual-starlink></alctual-starlink>
        <h1>SpaceX Launches</h1>
      </header>
      <launches-list></launches-list>
    `;
  }
}

customElements.define("launches-page", LaunchesPages);
