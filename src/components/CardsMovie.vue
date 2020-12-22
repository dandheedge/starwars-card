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
          <h2 class="text-xl title-font font-medium mb-3">{{ title }}</h2>
          <div class="flex flex-row space-x-4 justify-between">
            <p class="leading-relaxed text-sm text-justify w-1/2">
              Release Date
            </p>
            <p class="leading-relaxed text-sm text-justify w-1/2">
              {{ release_date }}
            </p>
          </div>
          <div class="flex flex-row space-x-4 justify-between">
            <p class="leading-relaxed text-sm text-justify w-1/2">Director</p>
            <p class="leading-relaxed text-sm text-justify w-1/2">
              {{ director }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    release_date: String,
    director: String,
  },
  computed: {
    getInitialName() {
      return this.title.charAt(0);
    },
  },
};
</script>