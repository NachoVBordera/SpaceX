import { LitElement, html } from "lit";
import "./missionStatus.ui";

export class LaunchElement extends LitElement {
  static get properties() {
    return {
      launch: { type: Object },
    };
  }

  render() {
    return html`
      <article class="launchArticle">
        <section class="launchListContainer">
          <ul>
            <li>
              <span class="imageContainer">
                <img src="${this.launch?.links.patch.small}" alt="patch" />
              </span>
            </li>
            <li>
              <mission-status ?status="${this.launch?.success}" />
            </li>
          </ul>
          <ul>
            <li>
              <p>Mission name</p>
              <p>${this.launch?.name}</p>
            </li>
            <li>
              <p>Rocket</p>
              <p>${this.launch?.rocket}</p>
            </li>
          </ul>
          <ul>
            <li>
              <p>Date</p>
              <p>${this.launch?.date_utc}</p>
            </li>
            <li>
              <p>Mission Number</p>
              <p>${this.launch?.flight_number}</p>
            </li>
          </ul>
          <span>
            <a href="${this.launch?.links.webcast}">Watch Video</a>
            <a href="${this.launch?.links.article}">Read Article</a>
          </span>
        </section>
      </article>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("launch-element", LaunchElement);
