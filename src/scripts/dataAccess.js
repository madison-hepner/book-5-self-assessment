const applicationState = {
    authors: [
        {
            "id": 1,
            "name": "J.K. ROWLING"

        },
        {
            "id": 2,
            "name": "STEPHEN KING"
        },
        {
            "id": 3,
            "name": "NORA ROBERTS"
        },
        {
            "id": 4,
            "name": "STAN LEE"
        }
    ],

    recipients: [
        {
            "id": 1,
            "name": "Maya Angelou"
        },
        {
            "id": 2,
            "name": "Mark Twain"
        },
        {
            "id": 3,
            "name": "Grace Hopper"
        }

    ]
}


export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const getRecips = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}



const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}