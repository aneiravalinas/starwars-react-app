import axios, { AxiosInstance } from 'axios';


export const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/swapi-proxy',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});