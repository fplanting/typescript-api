import { IService } from "../models/Iservice";

export class Service implements IService {
   
    title: string;

    constructor (title: string) {
        this.title = title;
    }
    

    getData() {

        console.log(this.title);

    return fetch("http://www.omdbapi.com/?t=&apikey=843111db&s=" + this.title)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    });
}
}