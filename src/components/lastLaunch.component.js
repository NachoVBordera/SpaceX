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

  formatDate(dateString) {
    const date = new Date(dateString);
    const MONTHNAMES = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = MONTHNAMES[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  }

  render() {
    return html`
      <article class="lastLaunchArticle">
        <section class="lastLaunchSection">
          <ul class="listDetail">
            <li>
              <p>LAST MISSION NAME</p>
              <p>${this.lastLaunch?.name}</p>
            </li>
            <li>
              <p>ROCKET</p>
              <p>Falcon-9</p>
            </li>
          </ul>
          <ul class="listDateState">
            <li>
              <p>DATE</p>
              <p>${this.formatDate(this.lastLaunch?.date_local)}</p>
            </li>
            <li>
              <p>STATE</p>
              <p>${this.lastLaunch?.success ? "Success" : "Failed"}</p>
            </li>
          </ul>

          <a href="${this.lastLaunch?.links.webcast}" target="_blank"
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
        </section>
        <span>
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
