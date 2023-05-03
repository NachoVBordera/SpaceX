import { LitElement, html } from "lit";

export class HomePage extends LitElement {
  static get properties() {
    return {};
  }

  async connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html` <h1>Home Page</h1> `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("home-page", HomePage);
