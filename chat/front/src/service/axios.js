import axios from "axios";

const chat = axios.create({
    baseURL: 'http://localhost:5000'
})

export const getChatData = async (url, query) => {
    try {
        const response = await chat.get(url)
        const { status, statusText, data } = response
        let res = { status, statusText, data }
        return (res)
    }
    catch (error) {
        return (error)
    }
}

export const postChatData = async (url, options) => {
    try {        
        const response = await chat.post(url, options)
        const { status, statusText, data } = response
        let res = { status, statusText, data }        
        return (res)
    }
    catch (error) {
        const { status, statusText, data } = error.response
        let res = { status, statusText, data }
        return (res)
    }
}
