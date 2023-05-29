<script>
import AppHeader from "./components/AppHeader.vue"
import AppContent from "./components/AppContent.vue"
import AppFooter from "./components/AppFooter.vue"
import { moviesList } from "../src/data/store.js"
import axios from 'axios';
import "/node_modules/flag-icons/css/flag-icons.min.css";

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
    SeriesLoaded(adress){ 
      axios.get(adress).then((response => {
        this.moviesList.series = response.data.results;
        console.log(this.moviesList.series);
      }))
    }
    },
  mounted() {
    this.moviesLoaded(this.moviesList.apiUrl+"a")
    this.SeriesLoaded(this.moviesList.apiUrlSeries+"a")
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

