import { LitElement, html } from "lit";

export class MainLogo extends LitElement {
  render() {
    return html`
      <section class="mainLogo">
        <img />
      </section>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("main-logo", MainLogo);
