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
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        rating: 9.3,
        type: "movie",
    },
    {
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
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
        genre: "Crime",
        rating: 9.5,
        type: "tv",
        seasons: 5,
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
const tvSeries1 = new TvSeries("Stranger Things", 2016, "Science Fiction", 8.7, "tv", 4);
console.log(tvSeries1.toString());