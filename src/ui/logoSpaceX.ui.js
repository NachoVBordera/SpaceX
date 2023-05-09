import { LitElement, html } from "lit";
import logo from "../../public/icons/spacex_logo.png";

export class MainLogo extends LitElement {
  render() {
    return html`
      <section class="mainLogo">
        <img src="${logo}" />
      </section>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("main-logo", MainLogo);
