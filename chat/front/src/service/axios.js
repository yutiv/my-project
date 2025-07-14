import axios from "axios";
const chat = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
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
        // console.log(options, " op");
        // console.log(url," url");

        const response = await chat.post(url, options)
        // console.log(response,"response");
        
        const { status, statusText, data } = response
        let res = { status, statusText, data }
        // console.log(res, " res");

        return (res)
    }
    catch (error) {
        
        const { status, statusText, data } = error.response
        // console.log(status, statusText, data," status, statusText, data");
        let res = { status, statusText, data }
        return (res)
    }
}
