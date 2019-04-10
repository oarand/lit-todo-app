import { html, LitElement } from 'lit-element';
import { addItemStyle } from './add-item-style';

class AddItem extends LitElement {

  static get properties() {
    return {};
  }

  static get styles() {
    return addItemStyle;
  }

    render() {
      return html `
        <div class="container">
          <div class="add">
            <div class="header">
              <h1>Add new item</h1>
            </div>
            <div class="input-container">
              <input id="newItem">
              <button class="btn-enter" @click="${this.addItem}">Add Item</button>
            </div>
          </div>
        </div>`;
    }

}

customElements.define('add-item', AddItem);