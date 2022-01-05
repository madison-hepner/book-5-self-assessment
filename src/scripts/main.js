import { letterForm } from "./PenPal.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = letterForm()
}

renderAllHTML()