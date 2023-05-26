<script>
import { moviesList } from "../data/store"
import axios from 'axios';
export default {
    data() {
        return {
            moviesList,
            searchFilm: "",
        }
    },
    methods: {
        moviesLoaded(adress) {
            axios.get(adress).then((response => {
                this.moviesList.movies = response.data.results;
                console.log(this.moviesList.movies);
            }))
        },
        searchmovie() {
            let indirizzo = this.moviesList.apiUrl + this.searchFilm
            this.moviesLoaded(indirizzo)
        }
    }
}
</script>

<template>
    <header>
        <div class="d-flex p-5 gap-4 w-50 m-auto">
            <h3>BoolFlix</h3>
            <input @keyup.enter="searchmovie" v-model="searchFilm"  type="search"
                placeholder="&#128269; Search " aria-label="Search">
        </div>
    </header>
</template>

<style lang="scss">
    header {
        background-color: black;
        color: red;
    } 
    input {
        width: 50%;
    }
</style>