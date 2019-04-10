import { css } from 'lit-element';

export const todoItemStyle = css `
.todo-item {
    cursor:pointer;
    display:flex;
    align-items:center;
    background:var(--todo-item-background,#fff);
    border-radius:4px;
    margin-bottom:0.5rem;
    line-height: 1.5;
    transition: all 200ms linear;
    position: relative;
    overflow: hidden;
}
input[type="checkbox"] {
    margin-left:1rem
}
input[type="checkbox"]:checked + .item {
    text-decoration: line-through;
    color:var(--todo-item-checked-color,red);
}
.todo-item .item {
    margin-right:auto;
    padding:0.625rem 1rem;
}
.todo-item .delete {
    padding:0.625rem 1rem;
    border-radius:0 0.5rem 0.5rem 0;
    color:rgba(0,0,0,0.25);
    transition: 100ms all linear;
    border:none;
    background:transparent;
    cursor:pointer;
    -webkit-appearance:button;
    margin-left:auto;
    opacity:0;
    pointer-events: none;
}
.todo-item:hover .delete {
    opacity:1;
    pointer-events: auto;
}
.todo-item .delete:hover {
    color:var(--todo-item-delete-hover-color,red);
}
.todo-item .delete:focus {
    outline:none;
}
@media (max-width: 576px) and (orientation:portrait) {
    .todo-item .delete {
        opacity:1;
        pointer-events: auto;
    }
}
@media (max-width: 992px) and (orientation:landscape) {
    .todo-item .delete {
        opacity:1;
        pointer-events: auto;
    }
}
`;