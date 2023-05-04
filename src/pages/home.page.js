import { LitElement, html } from "lit";
import "../components/launchesList.component";

export class HomePage extends LitElement {
  static get properties() {
    return {};
  }

  async connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <h1>Home Page</h1>

      <lainches-list></lainches-list>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("home-page", HomePage);
