import { html, LitElement } from 'lit-element';
import { todoItemStyle } from './todo-item-style';

class TodoItem extends LitElement {

  static get properties() {
    return {};
  }

  static get properties() {
    return todoItemStyle;
  }

  firstUpdated() {
    console.log('cargado todo item');
  }

    render() {
      return html `
        <div class="todo-item">
          <input type="checkbox" id="check" ?checked="${this.todoItem.done}" @change="${this.onStatusChange}">
          <div class="item">
            ${this.todoItem.item}
          </div>
          <button type="button" class="delete" @click="${()=>this.onRemoveItem(this.todoItem.id)}">
            <strong>X</strong>
          </button>
        </div>`;
  }

}

customElements.define('todo-item', TodoItem);