<template>
  <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col">
    <div class="pattern-dots-md gray-light">
      <div
        class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6"
      >
        <div
          class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2"
        >
          {{ getInitialName }}
        </div>
        <div class="flex-grow">
          <h2 class="text-xl title-font font-medium mb-3">{{ name }}</h2>
          <div class="flex flex-row space-x-4 justify-between">
            <p class="leading-relaxed text-sm text-justify w-1/2">Birth year</p>
            <p class="leading-relaxed text-sm text-justify w-1/2">
              {{ birthYear }}
            </p>
          </div>
          <div class="flex flex-row space-x-4 justify-between">
            <p class="leading-relaxed text-sm text-justify w-1/2">Eye Color</p>
            <p class="leading-relaxed text-sm text-justify w-1/2">
              {{ eyeColor }}
            </p>
          </div>
          <div class="flex mt-8">
            <router-link
              :to="`/people/${link}`"
              class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-yellow-500 uppercase transition bg-transparent border-2 border-yellow-500 rounded ripple hover:bg-yellow-800 focus:outline-none waves-effect"
              >See more</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    birthYear: String,
    eyeColor: String,
    link: Number,
  },
  computed: {
    getInitialName() {
      return this.name.charAt(0);
    },
  },
};
</script>