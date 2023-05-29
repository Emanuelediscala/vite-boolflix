import { reactive } from "vue";

export const moviesList = reactive({
apiUrl : "https://api.themoviedb.org/3/search/movie?api_key=36ef7610ad2870fc1884fa625bfe7c79&language=it-IT&query=",
movies: [],
imgFilm: "https://image.tmdb.org/t/p/w500",
series: [],
apiUrlSeries: "https://api.themoviedb.org/3/search/tv?api_key=36ef7610ad2870fc1884fa625bfe7c79&language=it-IT&query=",
})

