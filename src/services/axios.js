import axios from 'axios';
import config from './config.json';
import { showNotification } from "../components/general/showNotification";

const base = config.apiBase;

export const protectedApi = axios.create({
    baseURL: base
});

export const publicApi = axios.create({
    baseURL: base,
})

protectedApi.interceptors.response.use(
    (response) => {
        if (response.status !== 200 && response.status !== 201 && response.status !== 202 && response.status !== 203 && response.status !== 204) {
            showNotification("error", "Network Status: " + response.status, response.statusText)
        }
        return response

    }
)

protectedApi.interceptors.request.use(function (config) {
    const user = JSON.parse(window.localStorage.getItem('inlineUser'));
    config.headers.Authorization = 'Bearer ' + user.access_token;

    return config;
});