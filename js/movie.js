const URL_PATH = "https://api.themoviedb.org";
const API_KEY = "1415cd15b1c28a6b42679e0f8b7b9d30";
let MOVIE_ID = "";

document.addEventListener("DOMContentLoaded", () => {
    MOVIE_ID = getUrlVars().id;
});

const getUrlVars = () => {
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

