import { html, LitElement } from 'lit-element';
import { listItemStyle } from './list-item-style';
import './todo-item';

class ListItem extends LitElement {

  static get properties() {
    return {};
  }

  static get styles() {
    return listItemStyle;
  }

  firstUpdated() {
    console.log('soy list item');
  }

    render() {
      return html `
        <div class="lists">
          <div class="list">
              <h2 class="title">Today's todo list</h2>
              <div class="list-wrapper">
              ${repeat(this.todoList, (todoItem)=>todoItem.id,(todoItem)=>html`<todo-item todoitem="${JSON.stringify(todoItem)}"></todo-item>`)}
              </div>
          </div>
        </div>`;
    }

}

customElements.define('list-item', ListItem);