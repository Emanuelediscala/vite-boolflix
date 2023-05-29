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
        <div class=" container d-flex flex-wrap">
            <div class="generalCards p-5 widCalc   position-relative overflow-x-auto"
                v-for="(film, i) in this.moviesList.movies" @click=getStarValue()>
                <img id="poster" :src="getImg(film)" class="img-fluid" alt="Img Not Found">
                <div class="datiCards   position-absolute p-5 ">
                    <p class="text-white text-center m-2">PRODUCTION: <span>{{ film.original_title.toUpperCase() }}</span></p>
                    <p class="text-white text-center m-2">TITLE: <span>{{ film.title.toUpperCase() }}</span></p>
                    <div class="d-flex justify-content-center   gap-1">
                        <p class=" text-white text-center ">VOTE:</p>
                        <template class="d-flex" v-for="index in getStarValue(film.vote_average)" :key="index">
                            <i class="text-white fa-solid fa-star"></i>
                        </template>
                    </div>
                    <template class="d-flex justify-content-center mb-1">
                        <p class="d-block " :class="getFlag(film.original_language)"></p>
                    </template>
                </div>
            </div>
            <!-- SERIES MOVIES -->
            <div class="p-5 widCalc generalCards text-center position-relative overflow-x-auto"
                v-for="serie in this.moviesList.series">
                <img id="poster" :src="getImg(serie)" class="img-fluid" alt="Img Not Found">
                <div class="datiCards position-absolute p-5 ">
                        <p class="text-white text-center m-2">PRODUCTION: <span>{{ serie.name.toUpperCase() }}</span></p>
                        <p class="text-white  text-center m-2">TITLE: <span>{{ serie.original_name.toUpperCase() }}</span></p>
                        <div class="d-flex justify-content-center gap-1">
                            <p class="text-white">VOTE:</p>
                            <template class="d-flex" v-for="index in getStarValue(serie.vote_average)" :key="index">
                                <i class="text-white fa-solid fa-star"></i>
                            </template>
                        </div>
                        <template class="d-flex justify-content-center mb-1">
                            <p class="d-block text-center" :class="getFlag(serie.original_language)"></p>
                        </template>
                    </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
.widCalc {
    width: calc(100% / 3);
}

.datiCards {
    right: 0px;
    bottom: 0px;
    z-index: -10;
    width: 100%;
    height: 100%;

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
    text-align: center;
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