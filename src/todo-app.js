import { html, LitElement } from 'lit-element';
import './add-item';
import './list-item';

class TodoApp extends LitElement {

  static get properties() {
    return {};
  }

    render() {
      return html `
        <add-item @add-item="${this.onAddItem}"></add-item>
        <list-items @remove-item="${this.onRemoveItem}"
          .todoList="${this.todoList}">
        </list-items>
        `;
    }

}

customElements.define('todo-app', TodoApp);