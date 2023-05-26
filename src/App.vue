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
      
    }
  },
  methods: {
    moviesLoaded(adress) {
      axios.get(adress).then((response => {
        this.moviesList.movies = response.data.results;
        console.log(this.moviesList.movies);
      }))
    },
  },
  mounted() {
    console.log("CIAO")
    this.moviesLoaded(this.moviesList.apiUrl)
    console.log("lista api", this.moviesList.movies);
  }
}
</script>

<template>
  <AppHeader />
  <AppContent />

</template>

<style lang="scss" scoped>
@use './generic.scss' as *;
</style>

