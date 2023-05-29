<script>

import { moviesList } from "../data/store"
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { flags } from "../data/flags"
export default {
    data() {
        return {
            moviesList,
            flags,
            stella: 5
        }
    },
    methods: {
        getFlag(lang) {
            return 'fi fi-' + this.flags[lang]
        },
        getStarValue(oggetto) {
            return Math.floor(oggetto / 2)
        },
        getImg(oggetto) {
            if (oggetto.backdrop_path === null) {
                return "../src/assets/placeholder-image.png"
            }
            else {
                return this.moviesList.imgFilm + oggetto.backdrop_path
            }
        }
    }
}
</script>
<template>
    <main>
        <!-- CARD MOVIES -->
        <h1 class="text-center my-3">LISTA FILM</h1><h2 class="text-center">Trovati {{ this.moviesList.movies.length }}</h2>
        <div class=" container gap-1 p-5 d-flex flex-wrap">
            <div class="generalCards widCalc position-relative  "
                v-for="(film, i) in this.moviesList.movies" @click=getStarValue()>
                <img id="poster" :src="getImg(film)" class="img-fluid" alt="Img Not Found">
                <div class="datiCards position-absolute p-4 ">
                    <p class="text-white">PRODUCTION: <span>{{ film.original_title.toUpperCase() }}</span>
                    </p>
                    <p class="text-white">TITLE: <span>{{ film.title.toUpperCase() }}</span></p>
                    <div class="d-flex gap-1">
                        <p class="text-white">VOTE:</p>
                        <template v-for="cont in stella">
                            <template v-if="getStarValue(film.vote_average) >= cont">
                                <i class="text-warning fa-solid fa-star"></i>
                            </template>
                            <template v-else>
                                <i class="text-black fa-solid fa-star"></i>
                            </template>
                        </template>
                    </div>
                    <p class="text-white">{{ film.overview }}</p>
                    <template class="d-flex justify-content-center">
                        <p class="d-block mt-2" :class="getFlag(film.original_language)"></p>
                    </template>
                </div>
            </div>
        </div>
        <h1 class="text-center mb-3">LISTA SERIES</h1><h2 class="text-center">Trovati {{ this.moviesList.series.length }}</h2>
        <div class=" container gap-1 p-5 d-flex flex-wrap">
            <!-- SERIES MOVIES -->
            <div class=" widCalc generalCards  position-relative overflow-x-auto" v-for="serie in this.moviesList.series">
                <img id="poster" :src="getImg(serie)" class="img-fluid" alt="Img Not Found">
                <div class="datiCards position-absolute p-4">
                    <p class="text-white">PRODUCTION: <span>{{ serie.name.toUpperCase() }}</span></p>
                    <p class="text-white">TITLE: <span>{{ serie.original_name.toUpperCase() }}</span></p>
                    <div class="d-flex  gap-1">
                        <p class="text-white">VOTE:</p>
                        <template v-for="index in stella">
                            <template v-if="getStarValue(serie.vote_average) >= index">
                                <i class="text-warning fa-solid fa-star"></i>
                            </template>
                            <template v-else>
                                <i class="text-black fa-solid fa-star"></i> 
                            </template>
                        </template>
                    </div>
                    <p class="text-white">{{ serie.overview }}</p>
                    <template class="d-flex justify-content-center">
                        <p class="d-block  mt-2" :class="getFlag(serie.original_language)"></p>
                    </template>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
.widCalc {
    width: calc(100% / 3 - 0.50rem);
}

.generalCards {
    height: 191px;
}

.datiCards {
    right: 0px;
    bottom: 0px;
    z-index: -10;
    width: 100%;
    height: 191px;
    overflow-y: auto;
}
.generalCards:hover {
    img {
        opacity: 0.5;
    }

    .datiCards {
        z-index: 10;

    }
}

.width100 {
    width: 400px;
}

p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 700;
    font-size: 10px;
}

span {
    color: red;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 10px;
    font-weight: 700;
}
</style>