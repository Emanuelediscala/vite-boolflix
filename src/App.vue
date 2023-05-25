<script>
import AppHeader from "./components/AppHeader.vue"
import AppContent from "./components/AppContent.vue"
import AppFooter from "./components/AppFooter.vue"
import { moviesList } from "../src/data/store.js"
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter,
  },
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
    // searchmovie() {
    //   let indirizzo = this.moviesList.movies + this.searchFilm
    //   this.moviesLoaded(indirizzo)
    // }
  },
  computed: {
    searching() {
      return this.moviesList.movies.filter((card) => {
        return card.title.toLowerCase().startsWith(this.searchFilm)
      })
    }
  },
  mounted() {
    console.log("CIAO")
    this.moviesLoaded(this.moviesList.apiUrl)
    console.log("lista api", this.moviesList.movies);
  }
}
</script>

<template>
  <div class="d-flex gap-1 p-3" v-for="card in searching">
    <p class="text-bg-secondary">{{ card.original_title }}</p>
    <p class="text-bg-danger">{{ card.title }}</p>
    <p class="text-bg-primary">{{ card.original_language }}</p>
    <p class="text-bg-success">{{ card.vote_average }}</p>
  </div>
  <input @keyup.enter="searchmovie" v-model="searchFilm" class="form-control" type="search" placeholder="&#128269; Search "
    aria-label="Search">
</template>

<style lang="scss" scoped>
@use './generic.scss' as *;
</style>

