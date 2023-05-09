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
        <section class="launchSection ">
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
            <li>
              <p>ARTICLE</p>
              <a
                href="${this.upcommingLaunch?.links.article ??
                this.upcommingLaunch?.links.wikipedia}"
              >
                <?xml version="1.0" encoding="UTF-8"?><svg
                  width="24px"
                  height="24px"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M14 12l-3.5 2v-4l3.5 2z"
                    fill="#000000"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M2 12.707v-1.415c0-2.895 0-4.343.905-5.274.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9c1.181 0 2.561.027 3.912.065 2.851.081 4.277.121 5.182 1.053.906.931.906 2.38.906 5.274v1.415c0 2.896 0 4.343-.905 5.275-.906.931-2.331.972-5.183 1.052-1.35.039-2.73.066-3.912.066-1.181 0-2.561-.027-3.912-.066-2.851-.08-4.277-.12-5.183-1.052C2 17.05 2 15.602 2 12.708z"
                    stroke="#000000"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <p>WATCH LIVE</p>
              <a href="${this.upcommingLaunch?.links.webcast}"
                ><?xml version="1.0" encoding="UTF-8"?><svg
                  width="24px"
                  height="24px"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#000000"
                >
                  <path
                    d="M14 12l-3.5 2v-4l3.5 2z"
                    fill="#000000"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M2 12.707v-1.415c0-2.895 0-4.343.905-5.274.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9c1.181 0 2.561.027 3.912.065 2.851.081 4.277.121 5.182 1.053.906.931.906 2.38.906 5.274v1.415c0 2.896 0 4.343-.905 5.275-.906.931-2.331.972-5.183 1.052-1.35.039-2.73.066-3.912.066-1.181 0-2.561-.027-3.912-.066-2.851-.08-4.277-.12-5.183-1.052C2 17.05 2 15.602 2 12.708z"
                    stroke="#000000"
                    stroke-width="1.5"
                  ></path></svg
              ></a>
            </li>
          </ul>
        </section>
        <span class="missionlogoContainer">
          ${this.upcommingLaunch?.links.patch.small
            ? html`
                <img
                  src="${this.upcommingLaunch?.links.patch.small}"
                  alt="mission logo"
                />
              `
            : html``}
        </span>
      </article>
    `;
  }
  createRenderRoot() {
    return this;
  }
}

customElements.define("upcomning-launch", UpcomingLaunch);
