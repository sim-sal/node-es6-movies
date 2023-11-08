// DEFINISCO L'ARRAY DI OGGETTI CONTENENTE FILM O SERIE TV
const filmsAndSeries = [
    {
        title: "Il Signore degli Anelli",
        year: 2001,
        genre: "Fantasy",
        rating: 9.3,
        type: "movie",
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        year: 2001,
        genre: "Fantasy",
        rating: 7.6,
        type: "movie",
    },
    {
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        rating: 9.3,
        type: "movie",
    },
    {
        title: "The Godfather",
        year: 1972,
        genre: "Drama",
        rating: 9.2,
        type: "movie",
    },
    {
        title: "Die Hard",
        year: 1988,
        genre: "Action",
        rating: 8.2,
        type: "movie",
    },
    {
        title: "Mad Max: Fury Road",
        year: 2015,
        genre: "Action",
        rating: 8.1,
        type: "movie",
    },
    {
        title: "Game of Thrones",
        year: 2011,
        genre: "Fantasy",
        rating: 9.2,
        type: "tv",
        seasons: 8,
    },
    {
        title: "Breaking Bad",
        year: 2008,
        genre: "Drama",
        rating: 9.5,
        type: "tv",
        seasons: 5,
    },
    {
        title: "Stranger Things",
        year: 2016,
        genre: "Action",
        rating: 8.7,
        type: "tv",
        seasons: 4,
    },
];

// console.log(filmsAndSeries);

// CREO LA CLASSE MOVIE 
class Movie {
    constructor(title, year, genre, rating, type) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.rating = rating;
        this.type = type;
    }

    // Creo il metodo toString() che ritorni una stringa con i dati del film
    toString() {
        return `${this.title} è un film di genere ${this.genre}. E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}`;
    };
}

// Nuova istanza della classe Movie:
const movie1 = new Movie("Titanic", 1997, "Drama", 7.8, "movie");
console.log(movie1.toString());

// CREO LA CLASSE TVSERIES CHE ESTENDE MOVIE
class TvSeries extends Movie {
    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type); // Chiama il costruttore della classe padre

        // aggiungo una nuova chiave
        this.seasons = seasons;
    }

    // Creo il metodo toString() che ritorni una stringa con i dati del film
    toString() {
        return `${this.title} è una serie tv di genere ${this.genre}. La prima stagione è stata rilasciata nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. Ha un voto di ${this.rating}`;
    };
}

// Nuova istanza della classe TvSeries:
const tvSeries1 = new TvSeries("Stranger Things", 2016, "Action", 8.7, "tv", 4);
console.log(tvSeries1.toString());



// Creare un nuovo array di istanze di classe in base al tipo
// utilizziamo la funzione .map() per creare un nuovo array in cui per ciascun elemento dell'array filmsAndSeries, verrà creata un'istanza della classe Movie o TvSeries in base al tipo e salvata nel nuovo array.
const instancesArray = filmsAndSeries.map(item => {
    if (item.type === "movie") {
        return new Movie(item.title, item.year, item.genre, item.rating, item.type);
    } else if (item.type === "tv") {
        return new TvSeries(item.title, item.year, item.genre, item.rating, item.type, item.seasons);
    }
});

// Creazione di una funzione per calcolare la media dei voti di un genere specifico
function calcolaMediaVotiPerGenere(instancesArray, genere) {
    // Filtriamo solo i film del genere specifico
    const filmDelGenere = instancesArray.filter(film => film.genre === genere);

    // Calcoliamo la somma dei voti
    const sommaVoti = filmDelGenere.reduce((acc, film) => acc + film.rating, 0);

    // Calcoliamo la media dei voti
    const mediaVoti = sommaVoti / filmDelGenere.length;

    return mediaVoti;
}

// Media voto per genere FANTASY
const genereFantasy = "Fantasy";
const mediaVotiFantasy = calcolaMediaVotiPerGenere(instancesArray, genereFantasy);
console.log(`La media dei voti per il genere "${genereFantasy}" è ${mediaVotiFantasy}`);

// Media voto per genere DRAMA
const genereDrama = "Drama";
const mediaVotiDrama = calcolaMediaVotiPerGenere(instancesArray, genereDrama);
console.log(`La media dei voti per il genere "${genereDrama}" è ${mediaVotiDrama}`);

// Media voto per genere ACTION
const genereAction = "Action";
const mediaVotiAction = calcolaMediaVotiPerGenere(instancesArray, genereAction);
console.log(`La media dei voti per il genere "${genereAction}" è ${mediaVotiAction}`);

// Creiamo una funzione che restituisca la lista di tutti i generi dei film senza ripetizioni
function getUniqueGenres(instancesArray) {
    const uniqueGenres = [];

    instancesArray.forEach(movies => {
        if (!uniqueGenres.includes(movies.genre)) {
            uniqueGenres.push(movies.genre);
        }
    });

    return uniqueGenres;
}

// Utilizza la funzione per ottenere la lista dei generi unici
const generiUnici = getUniqueGenres(instancesArray);
console.log("I generi presenti sono:", generiUnici);


function filtraFilmPerGenere(instancesArray, genere) {
    // Filtra solo i film che corrispondono al genere specifico
    const filmFiltrati = instancesArray.filter(film => film.genre === genere);

    // Crea un array con le rappresentazioni stringhe dei film
    const filmStringhe = filmFiltrati.map(film => film.toString());

    return filmStringhe;
}

// Filtrare i film di genere "Fantasy"
const fantasyFiltered = "Fantasy";
const filmFantasy = filtraFilmPerGenere(instancesArray, fantasyFiltered);
console.log(`Film di genere "${fantasyFiltered}":`);
console.log(filmFantasy);

// Filtrare i film di genere "Drama"
const dramaFiltered = "Drama";
const filmDrama = filtraFilmPerGenere(instancesArray, dramaFiltered);
console.log(`Film di genere "${dramaFiltered}":`);
console.log(filmDrama);

// Filtrare i film di genere "Action"
const actionFiltered = "Action";
const filmAction = filtraFilmPerGenere(instancesArray, actionFiltered);
console.log(`Film di genere "${actionFiltered}":`);
console.log(filmAction);





