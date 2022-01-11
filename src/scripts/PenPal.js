import { Authors, Letter, Recipients, Letters1, } from "./form.js"
import { sendLetter } from "./dataAccess.js"
import { Topics } from "./Topics.js"


document.addEventListener("click", (event) => {
    if (event.target.id === "sendLetter") {
        sendLetter()
    }
})

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

        <section class="chouces__topic options">
            <h2>Topics</h2>
                ${Topics()}
        </section>

        <section class="choices__recip options">
            <h2>Recipient</h2>
                ${Recipients()}
        </section>
    </article>

        <article class="sentLetters">
        <section class="view__sent options">
            <h2>Sent Letters</h2>
              ${Letters1()}
            </section>
        </article>
    `
}