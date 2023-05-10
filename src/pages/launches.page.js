import "../components/launchesList.component";
import "../components/actuallStarlink.component";

export class LaunchesPages extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="launchesHeader">
        <h1>SpaceX Launches</h1>
        <alctual-starlink></alctual-starlink>
      </header>
      <launches-list></launches-list>
    `;
  }
}

customElements.define("launches-page", LaunchesPages);
