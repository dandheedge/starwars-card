<template>
  <div>
    <section class="text-gray-200">
      <HeaderComponent />
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 w-full">
        <cards-movie
          v-for="movie in movies"
          :key="movie.title"
          :title="movie.title"
          :release_date="movie.release_date"
          :director="movie.director"
        />
      </div>
    </section>
  </div>
</template>

<script>
import CardsMovie from "@/components/CardsMovie";
import HeaderComponent from "@/components/Header";
export default {
  components: {
    CardsMovie,
    HeaderComponent,
  },
  data() {
    return {
      movies: null,
    };
  },
  async mounted() {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => {
        this.movies = data.results;
      });
  },
};
</script>