import { LitElement, html } from "lit";

export class MainLogo extends LitElement {
  render() {
    return html`
      <section class="mainLogo">
        <img src="../../public/icons/spacex_logo.png" />
      </section>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("main-logo", MainLogo);
