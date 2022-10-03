import axios from 'axios'

const BASE_URL = 'https://krserver.herokuapp.com/'
export class ServerCall {
    static sendGet(url) {
        return axios.get(BASE_URL + url)
    }
    static sendPost(url, data) {
        return axios.post(BASE_URL + url, data)
    }
    static sendPut(url, data) {
        return axios.put(BASE_URL + url, data)
    }
    static sendDelete(url, data) {
        return axios.delete(BASE_URL + url, data)
    }
}