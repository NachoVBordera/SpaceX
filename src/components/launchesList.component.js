import { LitElement, html } from "lit";
import { AllLaunchesUseCase } from "../usecases/get-all-launches.usecase";
import "../ui/launchelement.ui";

export class LaunchesList extends LitElement {
  static get properties() {
    return {
      launches: { type: Object },
      displayCount: { type: Number },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    this.displayCount = 1;
    this.launches = await AllLaunchesUseCase.execute();
    console.log(this.launches);
  }

  async handleClick() {
    this.displayCount += 1;
    const nextPage = await AllLaunchesUseCase.execute(this.displayCount);
    this.launches = [...this.launches, ...nextPage];
  }

  render() {
    return html`
      <article class="launchesArticleContainer">
        <ul class="LaunchesListContainer">
          ${this.launches?.map(
            (launch) => html` <launch-element .launch="${launch}" />`
          )}
          <li class="buttonLoadContainer">
            <button @click="${this.handleClick}" class="loadMore">
              Load more
            </button>
          </li>
        </ul>
      </article>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("launches-list", LaunchesList);
