<script>

import { moviesList } from "../data/store"
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { flags } from "../data/flags"
export default {
    data() {
        return {
            moviesList,
            flags,

        }
    },
    methods: {
        getFlag(lang) {
            return 'fi fi-' + this.flags[lang]
        },
        getStarValue(oggetto) {
            return Math.floor(oggetto / 2)
            for (let index = 1; index < oggetto; index++) {
                
            }

        }
    }
}

</script>

<template>
    <main>
        <div class=" container d-flex flex-wrap">
            <div class="p-5 widCalc text-center" v-for="(film, i) in this.moviesList.movies" @click=getStarValue()>
                <img :src="moviesList.imgFilm + film.backdrop_path" alt="Img Not Found">
                <p class="text-center mt-3">PRODUCTION: <span>{{ film.original_title }}</span></p>
                <p>TITLE: <span>{{ film.title }}</span></p>
                <p class="d-inline-block">VOTE:</p>
                <template class="d-flex" v-for="index in getStarValue(film.vote_average)" :key="index"   >
                    <i class="fa-solid fa-star"></i>
                </template>
                <template class="d-flex justify-content-center">
                <p class="d-block text-center" :class="getFlag(film.original_language)"></p> 
                </template> 
            </div>
            <div class="p-5 widCalc text-center" v-for="serie in this.moviesList.series">
                <img :src="moviesList.imgFilm + serie.backdrop_path" alt="Img Not Found">
                <p class="text-center mt-3">PRODUCTION: <span>{{ serie.name }}</span></p>
                <p>TITLE: <span>{{ serie.original_name }}</span></p>
                <span :class="getFlag(serie.original_language)"></span>
                <p>VOTE: <span>{{ serie.vote_average }}</span></p>
            </div>
        </div>
    </main>
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