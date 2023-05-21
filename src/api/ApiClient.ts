import axios, { AxiosInstance } from 'axios';
import { API_URL } from '../config/Constants';


export const apiClient: AxiosInstance = axios.create({
    baseURL: `${ API_URL }/swapi-proxy`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});