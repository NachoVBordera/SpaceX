import { LitElement, html } from "lit";
import svgLoader from "../../public/images/loader.gif";

export class Loader extends LitElement {
  render() {
    return html`
      <article class="loader">
        <img src="${svgLoader}" />
      </article>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("loader-sit", Loader);
