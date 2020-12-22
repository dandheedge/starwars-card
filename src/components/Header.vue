<template>
  <div class="max-w-6xl mx-auto px-5 py-24">
    <div class="text-center mb-8">
      <h1
        class="title-font mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl"
      >
        Starwars Card
      </h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        Information about Starwars characters and movies from swapi
      </p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
      <div class="flex mt-4 justify-center space-x-8 text-md font-bold">
        <router-link to="/people">Character</router-link>
        <router-link to="/movies">Movies</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>