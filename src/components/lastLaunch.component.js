import { LitElement, html } from "lit";
import { LastLaunchUseCase } from "../usecases/last-launch.usecase";

export class LastLaunch extends LitElement {
  static get properties() {
    return {
      lastLaunch: { type: Object },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    this.lastLaunch = await LastLaunchUseCase.execute();
    console.log(this.lastLaunch);
  }

  render() {
    return html`
      <article class="lastLaunchArticle">
        <h2>Last Launch</h2>
        <section class="lastMissionSection">
          <ul class="LastLaunchListData">
            <li>
              <p>MISSION NAME</p>
              <p>${this.lastLaunch?.name}</p>
            </li>
            <li>
              <p>ROCKET</p>
              <p>Falcon-9</p>
            </li>
            <li>
              <p>DATE</p>
              <p>${this.lastLaunch?.date_local}</p>
            </li>
          </ul>

          <ul class="LastLaunchListData">
            <li>
              <p>STATE</p>
              <p>${this.lastLaunch?.success ? "Success" : "Failed"}</p>
            </li>
            <li>
              <p>ARTICLE</p>
              <a href="${this.lastLaunch?.links.article}">Read more</a>
            </li>
            <li>
              <p>WATCH</p>
              <a href="${this.lastLaunch?.links.webcast}">Watch Video</a>
            </li>
          </ul>
        </section>
        <span class="spanImagecontainer">
          <img src="${this.lastLaunch?.links.patch.small}" alt="mission logo" />
        </span>
      </article>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("last-launch", LastLaunch);
