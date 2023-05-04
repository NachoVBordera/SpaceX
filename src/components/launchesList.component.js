import { LitElement, html } from "lit";
import { AllLaunchesUseCase } from "../usecases/get-all-launches.usecase";
import "../ui/launchelement.ui";

export class LaunchesList extends LitElement {
  static get properties() {
    return {
      launches: { type: Object },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    this.launches = await AllLaunchesUseCase.execute();
    console.log(this.launches);
  }

  render() {
    return html`
      <article class="">
        <ul class="">
          ${this.launches
            ?.reverse()
            .map((launch) => html` <launch-element .launch="${launch}" />`)}
        </ul>
      </article>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("lainches-list", LaunchesList);
