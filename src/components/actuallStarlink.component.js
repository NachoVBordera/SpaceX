import { LitElement, html } from "lit";
import { StarlinkUseCase } from "../usecases/get-all-starlink.usecase";
import launchIcon from "../../public/icons/launching-icon.jpg";

export class ActuallStarlink extends LitElement {
  static get properties() {
    return {
      actuallStarlink: { type: Array },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    this.actuallStarlink = await StarlinkUseCase.execute();
  }

  render() {
    return html`
      <article class="actualStarlinkArticle">
        <img src="${launchIcon}" alt="space launch icon" />
        <p>
          There are currently
          <span> ${this.actuallStarlink?.length}</span> active Starlink on the
          low Earth orbit.
        </p>
      </article>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("alctual-starlink", ActuallStarlink);
