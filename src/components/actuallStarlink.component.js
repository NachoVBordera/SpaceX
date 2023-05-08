import { LitElement, html } from "lit";
import { StarlinkUseCase } from "../usecases/get-all-starlink.usecase";

export class ActuallStarlink extends LitElement {
  static get properties() {
    return {
      actuallStarlink: { type: Array },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    this.actuallStarlink = await StarlinkUseCase.execute();
    console.log(this.actuallStarlink.length);
  }

  render() {
    return html`
      <article class="actualStarlinkArticle">
        <svg
          width="138"
          height="138"
          viewBox="0 0 138 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6_71)">
            <path
              d="M49.5218 79.2933L62.1186 89.596L85.5983 74.1322C88.8975 71.9604 91.6203 69.0203 93.5332 65.5645C95.446 62.1087 96.4916 58.2403 96.5803 54.2914L96.9622 37.1808C96.9707 36.8099 96.8945 36.4419 96.7394 36.1048C96.5843 35.7677 96.3544 35.4704 96.0672 35.2355C95.78 35.0006 95.443 34.8343 95.0819 34.7491C94.7207 34.664 94.3449 34.6623 93.983 34.7442L77.2882 38.5129C73.4354 39.3832 69.8514 41.1754 66.8437 43.7358C63.836 46.2962 61.4946 49.5482 60.0204 53.2126L49.5218 79.2933ZM49.5218 79.2933L34.9228 77.8647C34.9228 77.8647 38.9271 60.1165 56.3885 61.2583M41.7948 88.7409C36.6434 95.0394 40.3662 103.34 40.3662 103.34C40.3662 103.34 49.2403 105.342 54.3916 99.0436M79.7903 80.3981C84.3733 97.286 67.7723 104.732 67.7723 104.732L63.4759 90.7061"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>

        <p>
          There are currently ${this.actuallStarlink.length} active Starlink on
          the low Earth orbit.
        </p>
      </article>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("alctual-starlink", ActuallStarlink);
