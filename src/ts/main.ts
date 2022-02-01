import { IService } from "./models/Iservice";
import { Service } from "./models/service";

let container = document.createElement("div");

let header = document.createElement("h1");
header.innerText = "Sök efter en film!";

let inputMovie = document.createElement("input");
inputMovie.placeholder = "Skriv filmtitel här";

let btn = document.createElement("button");
btn.innerText = "OK";

let containerMovie = document.createElement("main");

document.body.append(container);
container.append(header, inputMovie, btn);
document.body.append(containerMovie);

btn.addEventListener("click", () => {
    let service = new Service(inputMovie.value);
    let main = new Main();
    main.start(service);
});

class Main {
    start(service: Service) {

        containerMovie.innerText = "";

        service.getData().then(response => {

            for(let i = 0; i < response.Search.length; i++) {

                let movieTitle = response.Search[i].Title;
                let movieYear = response.Search[i].Year;
                let moviePoster = response.Search[i].Poster;

                let divMovie = document.createElement("div");
                containerMovie.append(divMovie);

                let titleMovie = document.createElement("h2");
                titleMovie.innerHTML = movieTitle;
                divMovie.append(titleMovie);

                let yearMovie = document.createElement("h3");
                yearMovie.innerHTML = movieYear;
                divMovie.append(yearMovie);

                let imgMovie = document.createElement("img");
                imgMovie.src = moviePoster;
                divMovie.append(imgMovie);
            };
        });
    };
};