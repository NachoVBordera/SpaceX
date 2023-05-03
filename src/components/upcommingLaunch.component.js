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
      <article class="upcomingLaunchArticle">
      
        <h2>Upcoming Launch</h2>

      <section class="upcomingLaungSection">

      <ul class="listDetail">
        <li>
          <p>MISSION NAME</p>
          <p>${this.upcommingLaunch?.name}</p>
        </li>
        <li>
          <p>ROCKET</p>
          <p>Falcon-9</p>
        </li>
      </ul>

      <ul class="listDateState ">
        <li>
          <p>DATE</p>
          <p>${this.formatDate(this.upcommingLaunch?.date_local)}</p>
        </li>
        <li>
          <p>STATE</p>
          <p>Upcoming</p>
        </li>            
      </ul>     
      </article>
    `;
  }

  /* 
    <span>
            </section>
            ${
              this.upcommingLaunch?.links.patch.small
                ? html`
                    <img
                      src="${this.upcommingLaunch?.links.patch.small}"
                      alt="mission logo"
                    />
                  `
                : html``
            }
            </span>
  
  
  */

  createRenderRoot() {
    return this;
  }
}

customElements.define("upcomning-launch", UpcomingLaunch);
