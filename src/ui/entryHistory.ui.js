import { LitElement, html } from "lit";

export class EntryHistory extends LitElement {
  static get properties() {
    return {
      entry: { type: Object },
    };
  }
  render() {
    return html`
      <article class="entry">
        <p>${this.entry?.date_utc}</p>
        <a href="${this.entry?.links.article}"> ${this.entry?.title} </a>
      </article>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("entry-history", EntryHistory);
