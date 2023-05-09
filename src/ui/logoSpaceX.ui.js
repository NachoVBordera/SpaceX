import { LitElement, html } from "lit";
import logo from "../../public/images/spacex_logo.jpg";

export class MainLogo extends LitElement {
  render() {
    return html`
      <section class="mainLogo">
        <img src="${logo}" alt="SpaceX logo" class="spaceXlogo" />
      </section>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("main-logo", MainLogo);
