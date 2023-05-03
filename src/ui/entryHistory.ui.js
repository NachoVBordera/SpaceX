import { LitElement, html } from "lit";

export class EntryHistory extends LitElement {
  static get properties() {
    return {
      entry: { type: Object },
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
      <article class="entry">
        <p>${this.formatDate(this.entry?.event_date_utc)}</p>
        <a href="${this.entry?.links.article}"> ${this.entry?.title} </a>
      </article>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("entry-history", EntryHistory);
