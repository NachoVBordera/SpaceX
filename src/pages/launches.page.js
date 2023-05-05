import "../components/launchesList.component";
import { LitElement, html } from "lit";

export class LaunchesPages extends LitElement {
  static get properties() {
    return {};
  }

  async connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html` <launches-list></launches-list> `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("launches-page", LaunchesPages);
