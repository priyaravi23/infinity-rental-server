const {Genre} = require("./models/genre");
const {Movie} = require("./models/movie");
const mongoose = require("mongoose");
const config = require("config");

const data = [
    {
        name: "Action",
        movies: [
            {title: "Avengers", numberInStock: 7, dailyRentalRate: 7.5},
            {title: "Bourne Series", numberInStock: 9, dailyRentalRate: 6.5},
            {title: "Deadpool", numberInStock: 7, dailyRentalRate: 3.5},
            {title: "Die Hard", numberInStock: 5, dailyRentalRate: 2.5},
            {title: "Mission Impossible", numberInStock: 8, dailyRentalRate: 7.5},
            {title: "Terminator", numberInStock: 6, dailyRentalRate: 2.5}
        ]
    },
    {
        name: "Fantasy",
        movies: [
            {title: "Harry Potter", numberInStock: 11, dailyRentalRate: 7.9},
            {title: "Hobbit", numberInStock: 10, dailyRentalRate: 7.9},
            {title: "Lord Of The Rings", numberInStock: 10, dailyRentalRate: 7.9},
            {title: "Twilight Saga", numberInStock: 9, dailyRentalRate: 3.5},
            {title: "X-Men", numberInStock: 9, dailyRentalRate: 6.5}
        ]
    },
    {
        name: "Thriller",
        movies: [
            {title: "Deep Blue Sea", numberInStock: 6, dailyRentalRate: 5.5},
            {title: "Descent", numberInStock: 5, dailyRentalRate: 2.5},
            {title: "Event Horizon", numberInStock: 5, dailyRentalRate: 4.5},
            {title: "Final Destination", numberInStock: 5, dailyRentalRate: 2.5},
            {title: "Resident Evil", numberInStock: 6, dailyRentalRate: 2.5},
            {title: "Sunshine", numberInStock: 5, dailyRentalRate: 4.5},
            {title: "Underworld", numberInStock: 8, dailyRentalRate: 6.5}
        ]
    },
    {
        name: "Horror",
        movies: [
            {title: "28 Days Later", numberInStock: 5, dailyRentalRate: 2.5},
            {title: "30 Days Of Night", numberInStock: 5, dailyRentalRate: 2.5},
            {title: "Alien", numberInStock: 7, dailyRentalRate: 3.5},
            {title: "Conjuring", numberInStock: 5, dailyRentalRate: 2.5},
            {title: "Drag Me To Hell", numberInStock: 7, dailyRentalRate: 2.5},
            {title: "Exorcism of Emily Rose", numberInStock: 5, dailyRentalRate: 2.5},
            {title: "Insidious", numberInStock: 2, dailyRentalRate: 2.5},
            {title: "Ring", numberInStock: 5, dailyRentalRate: 2.5},
            {title: "Saw", numberInStock: 10, dailyRentalRate: 5.5}
        ]
    },
    {
        name: "Dystopian",
        movies: [
            {title: "Divergent", numberInStock: 5, dailyRentalRate: 2.5},
            {title: "Hunger Games", numberInStock: 7, dailyRentalRate: 5.5},
            {title: "Maze Runner", numberInStock: 7, dailyRentalRate: 4.5}
        ]
    }
];

async function seed() {
    await mongoose.connect(config.get("db"));

    await Movie.deleteMany({});
    await Genre.deleteMany({});

    for (let genre of data) {
        const {_id: genreId} = await new Genre({name: genre.name}).save();
        const movies = genre.movies.map(movie => ({
            ...movie,
            genre: {_id: genreId, name: genre.name}
        }));
        await Movie.insertMany(movies);
    }

    mongoose.disconnect();

    console.info("Done!");
}

seed();
