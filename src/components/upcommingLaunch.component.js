import { LitElement, html } from "lit";
import { UpcomingLaunchUseCase } from "../usecases/upcomung-launch.usecase";

export class UpcomingLaunch extends LitElement {
  static get properties() {
    return {
      upcommingLaunch: { type: Object },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    this.upcommingLaunch = await UpcomingLaunchUseCase.execute();
  }

  render() {
    return html`
      <article class="upcomingLaunchArticle">
        <h2>Upcoming launch</h2>

        <ul class="listData">
          <li>
            <p>Mission name</p>
            <p>${this.upcommingLaunch?.name}</p>
          </li>
          <li>
            <p>Rocket</p>
            <p>Falcon-9</p>
          </li>

          <li>
            <p>Date</p>
            <p>${this.upcommingLaunch?.date_local}</p>
          </li>
          <li>
            <p>State</p>
            <p>Upcoming</p>
          </li>
        </ul>
      </article>
    `;
  }
  createRenderRoot() {
    return this;
  }
}

customElements.define("upcomning-launch", UpcomingLaunch);
