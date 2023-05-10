import { LitElement, html } from "lit";
import { HistoryUseCase } from "../usecases/history.usecase";
import "../ui/entryHistory.ui";

export class SpaceXHistory extends LitElement {
  static get properties() {
    return {
      history: { type: Object },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    this.history = await HistoryUseCase.execute();
  }

  render() {
    return html`
      <article class="historyListContainer">
        <h2>SpaceX History</h2>
        <ul class="entriesList">
          ${this.history?.reverse().map(
            (entry) => html`
              <li>
                <entry-history .entry=${entry}></entry-history>
              </li>
            `
          )}
        </ul>
      </article>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define("spacex-history", SpaceXHistory);
