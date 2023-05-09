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
        <h2>Upcoming Launch</h2>

        <ul class="listData">
          <li>
            <p>MISSION NAME</p>
            <p>${this.upcommingLaunch?.name}</p>
          </li>
          <li>
            <p>ROCKET</p>
            <p>Falcon-9</p>
          </li>

          <li>
            <p>DATE</p>
            <p>${this.upcommingLaunch?.date_local}</p>
          </li>
          <li>
            <p>STATE</p>
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
