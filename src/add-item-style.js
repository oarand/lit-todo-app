import { css } from 'lit-element';

export const addItemStyle = css`
.add {
    position: fixed;
    left: 2rem;
    top: 2rem;
    bottom: 2rem;
    background: var(--add-item-background,#0064FF);
    width:350px;
    padding:1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius:1rem;
}
.add input {
    border:none;
    border-radius:4px;
    margin:0;
    padding:1rem 1rem 2rem 1rem;
    font-size:1rem;
    width:100%;
    display:block;
    background:var(--add-item-input-background,#fff);
    resize: none;
    box-sizing: border-box;
    overflow-y: auto;
}
.add input:focus {
    outline:none;
    box-shadow: 0 0 0 3px #0064FF, 0 0 0 6px rgba(255,255,255,0.5);
}
.add input:focus ~ .btn-enter {
    display:block;
}
.add .btn-enter {
    position: absolute;
    font-size:0.75rem;
    text-transform: uppercase;
    background:var(--add-item-btn-background,#fff);
    padding:0.375rem;
    line-height: 1;
    right:0.25rem;
    bottom:0.25rem;
    border:none;
    border-radius:0.25rem;
    color:var(--add-item-btn-color,#0064FF);
    font-weight: var(--add-item-btn-font-weight,700);
    cursor:pointer;
    letter-spacing: 0.5px
}
.add .btn-enter:hover {
    background:var(--add-item-btn-hover-background,#0064FF);
    color:var(--add-item-btn-hover-color,#fff);
}
add .btn-enter:focus, .add .btn-enter:active {
    display:block;
}
.input-container {
    position: relative;
    border-radius:5rem;
    display:flex;
    align-items:center;
}
.header {
    text-align: center;
    color:var(--add-item-header-color,#fff);
    padding:2rem 0;
}
.header h1 {
    padding:0;
    margin:0;
    line-height: 1;
    letter-spacing:3px;
    text-transform:uppercase;
}
@media (max-width: 576px) and (orientation:portrait) {
    .add {
        position: relative;
        width:auto;
        left:auto;
        right:auto;
        top:auto;
        bottom: auto;
        border-radius:0;
    }
    .add .header {
        padding:0 1rem 0.5rem 1rem;
    }
    .add .header h1 {
        font-size:1.5rem;
    }
}

@media (max-width: 992px) and (orientation:landscape) {
    .add {
        border-radius:0;
        left:0;
        bottom:0;
        top:0;
    }
}
`;