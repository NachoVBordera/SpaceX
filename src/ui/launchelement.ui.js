import { LitElement, html } from "lit";

export class LaunchElement extends LitElement {
  static get properties() {
    return {
      launch: { type: Object },
    };
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
      <article class="launchArticle">
        
        <ul>  
            <li>
                <span>
                <img src="${this.launch?.links.patch.small}" alt="patch" />
                </span>
        
            <li>
                <p>STATUS</p>
                <p> ${this.launch?.success}</p>
            </li>
            <li>
                <p>MISSION NAME</p>
                <p> ${this.launch?.name}</p>
            </li>
            <li>
                <p>ROCKET</p>
                <p>Falcon 9</p>
            </li>
            <li>
                <p>DATE</p>
                <p>${this.formatDate(this.launch?.date_utc)}</p>
            </li>
            <li>
                <p>MISSION NUMBER</p>
                <p> ${this.launch?.flight_number}</p>
            </li>
            <li>
                <a href="${this.launch?.links.webcast}">Watch Video</a>
                <a href="${this.launch?.links.article}">Read Article</a>
            </li>
    
      </article>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("launch-element", LaunchElement);
