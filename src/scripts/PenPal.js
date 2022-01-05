import { Page } from "./form.js"


export const letterForm = () => {
    return `
        <h1>Pen Pal Society</h1>

        <article class="authors">
        <section class="choice__author options">
            <h2>Authors</h2>
            ${Entrees()}
        </section>
        <section class="choices__sides options">
            <h2>Sides</h2>
            ${Sides()}
        </section>
        <section class="choices__veggies options">
            <h2>Veggies</h2>
            ${Veggies()}
        </section>
    </article>



        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}