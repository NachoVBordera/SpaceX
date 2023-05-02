//VANILLA WC
import { LitElement, css, html } from "lit";

/* export class AppElement extends HTMLElement {
  //cuanso usan metodos que extienden de la clase padre o
  // el constructor siempre se necesita super()
  // constructor() {
  //   super();
  //   console.log("App element init...");
  // }

  connectedCallback() {
    this.hello = this.getAttribute("hello") || "hola mundo";
    //this.innerHTML = "Hola mundo Web Components!";
    //usando shadow dom
    this.attachShadow({ mode: "open" });
    // ahora se puede ver el shadow dom pero lo que leen las
    // arañas y los lectores es el ligth dom
    //Los estilos  en el shadowRoot afectan solo al shadow dom
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: block;
        border: 2px solid black;
      }
    p {
      color: var(--color-sit, black);
    }
    ::slotted(p) {
      color: red;
    }
    </style>

    <slot></slot>
    <p part="test">${this.hello}</p>
    <button>Click!</button>
    `;
    this.button = this.shadowRoot.querySelector("button");
    this.button.onclick = (e) => this.clickMe(e);
  }

  clickMe(e) {
    e.preventDefault();
    console.log(e);
    const message = new CustomEvent("sit:message", {
      bubbles: true,
      composed: true,
      detail: {
        msg: "Hola desde dentro del componente",
      },
    });
    this.dispatchEvent(message);
  }
}

customElements.define("app-element", AppElement); */

//LIT ELEMENT
export class AppElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: 2px solid black;
      }
      p {
        color: var(--color-sit, black);
      }
      ::slotted(p) {
        color: red;
      }
    `;
  }

  static get properties() {
    return {
      hello: { type: String },
      pepito: { type: String },
      disabled: { type: Boolean },
      val: { type: Object },
      tags: { type: Array },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.pepito = "Pepito";
    this.disabled = false;
    this.val = "Valor";
    this.tags = ["hola", "Mundo"];
  }

  render() {
    return html`
      ${this.disabled
        ? html`<input type="text" .value="${this.val}" />
            <input type="text" ?disabled="${this.disabled}" />
            <slot></slot>
            <p part="test">${this.hello} -- ${this.pepito}</p>
            <ul>
              ${this.tags.map((tag) => html` <li>${tag}</li> `)}
            </ul> `
        : ""}
      <button @click="${this.clickMe}">Click!</button>
    `;
  }

  createRenderRoot() {
    return this;
  }

  clickMe(e) {
    e.preventDefault();
    //console.log(e);
    this.disabled = !this.disabled;
    const message = new CustomEvent("sit:message", {
      bubbles: true,
      composed: true,
      detail: {
        msg: "Hola desde dentro del componente",
      },
    });
    this.dispatchEvent(message);
  }
}

customElements.define("app-element", AppElement);
