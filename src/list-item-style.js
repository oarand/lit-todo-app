import { css } from 'lit-element';

export const listItemStyle = css`
.lists {
    padding-left:350px;
    margin:0 auto;
    max-width:500px;
}
.list {
    transform-origin:center bottom;
    transition:200ms all linear;
}
.list .title {
    color:var(--list-items-title-color, #B8D4FF);
    font-size:var(--list-items-title-size, 1.5rem);
    letter-spacing:5px;
    text-transform: uppercase;
    text-align: center;
    margin:3.5rem 0 3.5rem 0;
    line-height: 1;
}
.list .list-wrapper  {
    list-style: none;
    margin:0 0.5rem;
    padding:0;
}
@media (max-width: 576px) and (orientation:portrait) {
    .lists {
        padding:0 1rem;
        margin-bottom:5rem;
    }
    .list .title {
        margin:1.5rem 1rem;
        font-size:1.5rem;
    }
}
</style>
`;