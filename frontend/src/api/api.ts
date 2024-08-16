import axios, {AxiosError, AxiosInstance} from 'axios';
import {toast} from 'react-toastify';

type ErrorMessage = {
    errorType: string;
    message: string;
    details: { property: string } & { value: string } & { messages: string[] }[];
}

const ErrorTypes = {
    ECONNREFUSED: 0,
    BAD_REQUEST: 400,
    NOT_FOUND: 404
} as const;

export const BACKEND_URL = 'http://localhost:5000/'; //Deploy: 'http://84.201.153.121:8080/'
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
    const api = axios.create({
        baseURL: BACKEND_URL,
        timeout: REQUEST_TIMEOUT,
    });

    api.interceptors.response.use(
        (response) => response,
        (error: AxiosError<ErrorMessage>) => {
            if (error.response) {
                if (error.response.status === ErrorTypes.BAD_REQUEST) {
                    toast.error(`Error ${ErrorTypes.BAD_REQUEST}. Entity already exist`);
                }
                if (error.response.status === ErrorTypes.NOT_FOUND) {
                    toast.error(`Error ${ErrorTypes.NOT_FOUND}. Entity doesn't exist`);
                }
                if (error.response.status === ErrorTypes.ECONNREFUSED) {
                    toast.error('The connection to the server could not be established');
                }
            }
        }
    );

    return api;
};
