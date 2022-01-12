import { getTopics, setTopic } from "./dataAccess.js"

const entrees = getTopics()



document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "topics") {
            setTopic(parseInt(event.target.value))
            // window.alert(`User chose metal ${event.target.value}`)
        }
    }
)



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