const URL_PATH = "https://api.themoviedb.org";
const API_KEY = "1415cd15b1c28a6b42679e0f8b7b9d30";
let MOVIE_ID = "";

document.addEventListener("DOMContentLoaded", () => {
    MOVIE_ID = getUrlVars().id;
    renderMovieDetails(MOVIE_ID);
});

const getUrlVars = () => {
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

const getMovieDetails = (movieId) => {
    const url = `${URL_PATH}/3/movie/${movieId}?api_key=${API_KEY}&language=es-ES`;

    return fetch(url)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log(error))
}

const renderMovieDetails = async (movieId) => {
    const movieDetails = await getMovieDetails(movieId);
    console.log(movieDetails);

    // const { backdrop_path, poster_path, title, overview, genres, release_date } = movieDetails;
    // renderBackground(backdrop_path);
    // renderPoster(poster_path, title);
    // renderMovieData(title, overview, genres, release_date);
    // getTeaser(movieId);
}