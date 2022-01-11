import { getAuthors, getRecips, getLetters, sendLetter } from "./dataAccess.js"

const authors = getAuthors()
const recips = getRecips()
const letters = getLetters()

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const userAuthor = document.querySelector("#author").value
        const userLetter = document.querySelector("input[name='letter']").value
        const userRecip = document.querySelector("#recip").value
        
        // const userDate = document.querySelector("input[name='serviceDate']").value
        

        // Make an object out of the user input
        const dataToSendToAPI = {
            author: +userAuthor,
            letter: userLetter,
            recipient: +userRecip
            // neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendLetter(dataToSendToAPI)
    }
})


export const Authors = () => {
    let html =
    `<select class="author" id="author">
        <option value="">Choose</option>
        ${
        authors.map(
            author => {
                return `<option value="${author.id}">${author.name}</option>`
            }
        ).join("")
        }
    </select>`

    return html

}


    
export const Letter = () => {
    let html = `
            <input type="text" name="letter" class="field" />

        `

    return html
}


export const Recipients = () => {
    let html =
    `<select class="recip" id="recip">
    <option value="">Choose Recipient</option>
    ${
        recips.map(
            recip => {
                return `<option value="${recip.id}">${recip.name}</option>`
            }
        ).join("")
        
    }
</select>

    <div>
        <button class="button" id="sendLetter">Send Letter</button>
    </div>

`

return html
}
/*
const convertRequestToListRecips = (recips) => {
    
    return `<li> ${recips.name} ${recips.email}
    </li>`
}
*/

export const Letters1 = () => {
    let html = ""

    for (const letters of getLetters()) {
        const authors = getAuthors()
        const recips = getRecips()
        const letters = getLetters()
        
        const foundRecip = getRecips().find(
            (recips) => {
                if (parseInt(letters.recipients) === recips.id) {
                    return true
                }
                return false
            }
        )
    
    
        const foundAuthor = getAuthors().find(
            (authors) => {
                if (parseInt(letters.authors) === authors.id) {
                    return true
                }
                return false
            }
        )
    
        html += `<div class="recipName"> Dear ${foundRecip.name}</div>`
    
            html += `
            <div class="letterhtml">${letters.letter}</div>
            <div class="authorhtml">From your friend ${foundAuthor.name}</div>
            
            `
    }


    return html
}



/*
const authors = getAuthors()
    const recip = getRecips()
    const letters = getLetters()
    let html = `
    <ul> 
        ${
            recip.map((recips) => convertRequestToListRecips(recip))
        }

    </ul>
    `
*/