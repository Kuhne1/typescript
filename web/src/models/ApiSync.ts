import axios, { AxiosPromise } from "axios";
import { localhost } from "../../config";

interface HasId {
    id?: number;
}

export class ApiSync<T extends HasId> {
    constructor(public rootUrl: string) { }

    fetch(id: number): AxiosPromise<T> {
        return axios.get(`${this.rootUrl}/${id}`)
    };

    save(data: T): AxiosPromise {
        const { id } = data;
        if (id) {
            return axios.put(`${localhost}users/${id}`, data)
        } else {
            return axios.post(`${localhost}users`, data)
        }
    }
}