const applicationState = {
    authors: [
        {
            "id": 1,
            "name": "J.K. ROWLING",
            "email": "jkrowling@gmail.com"

        },
        {
            "id": 2,
            "name": "STEPHEN KING",
            "email": "StLing@gmail.com"
        },
        {
            "id": 3,
            "name": "NORA ROBERTS",
            "email": "noraroberts@gmail.com"
        },
        {
            "id": 4,
            "name": "STAN LEE",
            "email": "StanLee@gmail.com"
        }
    ],

    recipients: [
        {
            "id": 1,
            "name": "Maya Angelou",
            "email": "MayaAngelou@gmail.com"
        },
        {
            "id": 2,
            "name": "Mark Twain",
            "email": "MarkTwain@gmail.com"
        },
        {
            "id": 3,
            "name": "Grace Hopper",
            "email": "gracehopper@gmail.com"
        },
        {
            "id": 4,
            "name": "J.K. ROWLING",
            "email": "jkrowling@gmail.com"

        },
        {
            "id": 5,
            "name": "STEPHEN KING",
            "email": "StLing@gmail.com"
        },
        {
            "id": 6,
            "name": "NORA ROBERTS",
            "email": "noraroberts@gmail.com"
        },
        {
            "id": 7,
            "name": "STAN LEE",
            "email": "StanLee@gmail.com"
        }

    ],

    letters: [],

    topics: [
        { 
            "id": 1,
            "topic": "business"
        },
        {
            "id": 2,
            "topic": "friendly"
        },
        {
            "id": 3,
            "topic": "family"
        },
        {
            "id": 4,
            "topic": "congradulations"
        },
        {
            "id": 5,
            "topic": "condolences"
        }
    ]
}


export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const getRecips = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}



export let setAuthors = (id) => {
    applicationState.authors.authorId = id
}

export let setRecips = (id) => {
    applicationState.recipients.recipId = id
}

export let setLetters = (id) => {
    applicationState.letters.letter = id
}

export let setTopic = (id) => {
    applicationState.topics.topicId = id
}



const API = "http://localhost:8088"

export const searchLetter = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (theLetters) => {
                // Store the external state in application state
                applicationState.letters = theLetters
            }
        )
}



export const sendLetter = (tosendLetters) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tosendLetters)
    }


    return fetch(`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        container.dispatchEvent(new CustomEvent("stateChanged"))
    })
        
}