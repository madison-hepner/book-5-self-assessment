import { getAuthors, getRecips } from "./dataAccess.js"

const authors = getAuthors()
const recips = getRecips()

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userAuthor = document.querySelector("input[name='author']").value
        const userLetter = document.querySelector("input[name='letter']").value
        /*const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value
        */

        // Make an object out of the user input
        const dataToSendToAPI = {
            description: userAuthor,
            address: userLetter,
            budget: userBudget,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})


export const Authors = () => {
    let html =
    `<select class="author" id="author">
    <option value="">Choose</option>
    ${
        authors.map(
            author => {
                return `<option value="${author.id}--${author.id}">${author.name}</option>`
            }
        ).join("")
    }
</select>`
return html
}


    
export const Letter = () => {
    let html = `
            <input type="text" name="letter" class="field" />



            <button class="button" id="sendLetter">Send Letter</button>
        `

    return html
}

export const Recipients = () => {
    let html =
    `<select class="recip" id="recip">
    <option value="">Choose</option>
    ${
        recips.map(
            recip => {
                return `<option value="${recip.id}--${recip.id}">${recip.name}</option>`
            }
        ).join("")
    }
</select>`
return html
}



