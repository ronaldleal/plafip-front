import axios from "axios";

const client = axios.create({
    baseURL: 'http://54.146.132.29:8080/',
    timeout: 10000
});

export default client;