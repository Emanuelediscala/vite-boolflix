<script>

import { moviesList } from "../data/store"

export default {
    data() {
        return {
            moviesList
        }
    }
}
</script>


<template>
    <div class=" container d-flex flex-wrap">
        <div class="p-5 widCalc text-center" v-for="card in this.moviesList.movies">
            <img :src="moviesList.imgFilm + card.backdrop_path" alt="Img Not Found">
            <p class="text-center mt-3" >PRODUCTION: <span>{{ card.original_title }}</span></p>
            <p>TITLE: <span>{{ card.title }}</span></p>
            <p>LANGUAGE: <span>{{ card.original_language }}</span></p>
            <p>VOTE: <span>{{ card.vote_average }}</span></p>
        </div>
    </div>
</template>

<style lang="scss">
    .widCalc {
        width: calc(100% / 3);
    }
    p {
        
        text-align: center;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 700;

    }
    span {
        color: red;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
</style>