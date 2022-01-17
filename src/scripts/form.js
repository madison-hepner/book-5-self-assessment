import { getAuthors, getRecips, getLetters, sendLetter, setAuthors, setRecips, setLetters, setTopic, getTopics } from "./dataAccess.js"

const authors = getAuthors()
const recips = getRecips()
const letters = getLetters()
const topics = getTopics()


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const userAuthor = document.querySelector("#author").value
        const userLetter = document.querySelector("input[name='letter']").value
        const userRecip = document.querySelector("#recip").value
        const userTopic = document.querySelector("#topics").value
        
        // const userDate = document.querySelector("input[name='serviceDate']").value
        
        
        // Make an object out of the user input
        const dataToSendToAPI = {
            authorId: +userAuthor,
            letter: userLetter,
            recipId: +userRecip,
            topicId: +userTopic
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


const buildLetterListItem = (letters) => {

    const authors = getAuthors()
    const recips = getRecips()
    const topics = getTopics()

    const foundRecip = getRecips().find(
        (recips) => {
            return recips.id === letters.recipId
        }
    )

    const foundAuthor = getAuthors().find(
        (authors) => {
            return authors.id === letters.authorId
        }
    )

    const foundTopic = getTopics().find(
        (topic) => {
            return topic.id === letters.topicId
        }
    )
    
    return `<ul class="boxPlace"><h2 class="recipPlace">Dear ${foundRecip.name}, </h2>
    
    <h4 class="letterPlace">${letters.letter}</h2>

    <div class="topicPlace">topic of: ${foundTopic.topic}</div>

    <h4 class="authorPlace">Sincerely, ${foundAuthor.name}</h4>
    </ul>`

}

export const sentLetters = () => {
    const authors = getAuthors()
    const recips = getRecips()
    const letters = getLetters()

    
    let html = `
    <ul> 
        ${
            letters.map((letter) => buildLetterListItem(letter))
        }

    </ul>
    `

    return html
}
