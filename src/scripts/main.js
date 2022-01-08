import { letterForm } from "./PenPal.js"
import { searchLetter } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

const renderAllHTML = () => {
    mainContainer.innerHTML = letterForm()
}

renderAllHTML()

const render = () => {
    searchLetter().then(
        () => {
            mainContainer.innerHTML = letterForm()
        }
    )
}

render()