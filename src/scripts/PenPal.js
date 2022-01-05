import { Authors, Letter, Recipients } from "./form.js"


export const letterForm = () => {
    return `
        <h1>Pen Pal Society</h1>

        <article class="authors">
        <section class="choice__author options">
            <h2>Authors</h2>
                ${Authors()}
        </section>
        <section class="choices__letter options">
            <h2>Letter</h2>
                ${Letter()}
        </section>
        <section class="choices__recip options">
            <h2>Recipient</h2>
                ${Recipients()}
        </section>
    </article>
    `
}