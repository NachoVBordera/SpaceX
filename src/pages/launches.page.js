import "../components/launchesList.component";
import "../components/actuallStarlink.component";
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
      <header class="launchesHeader">
        <alctual-starlink></alctual-starlink>
        <h1>SpaceX Launches</h1>
      </header>
      <launches-list></launches-list>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("launches-page", LaunchesPages);
