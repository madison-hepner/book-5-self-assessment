import { getTopics, setTopic } from "./dataAccess.js"

const topics = getTopics()




export const Topics = () => {
    const topics = getTopics()
    let html = "<ul>"

    const topicItems = topics.map(topic => {
        return `<li>
        <input type ="radio" id="topics" value="${topic.id}" /> ${topic.topic}
        </li> `
    })

    html += topicItems.join("")
    html += "</ul>"

    return html
}