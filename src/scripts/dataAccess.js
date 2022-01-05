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