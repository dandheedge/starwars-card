<template>
  <div>
    <section class="text-gray-200">
      <HeaderComponent />
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 w-full">
        <div class="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col mx-auto">
          <div class="pattern-dots-md gray-light">
            <div
              class="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6"
            >
              <div class="flex-grow">
                <h2
                  class="text-2xl title-font font-medium mb-3 text-yellow-500"
                >
                  {{ person.name }}
                </h2>
                <div class="flex flex-row space-x-4 justify-between my-2">
                  <p class="leading-relaxed text-sm text-justify w-1/2">
                    Birth year
                  </p>
                  <p class="leading-relaxed text-sm text-justify w-1/2">
                    {{ person.birth_year }}
                  </p>
                </div>
                <div class="flex flex-row space-x-4 justify-between my-2">
                  <p class="leading-relaxed text-sm text-justify w-1/2">
                    Eye Color
                  </p>
                  <p class="leading-relaxed text-sm text-justify w-1/2">
                    {{ person.eye_color }}
                  </p>
                </div>
                <div class="flex flex-row space-x-4 justify-between my-2">
                  <p class="leading-relaxed text-sm text-justify w-1/2">
                    Hair Color
                  </p>
                  <p class="leading-relaxed text-sm text-justify w-1/2">
                    {{ person.hair_color }}
                  </p>
                </div>
                <div class="flex flex-row space-x-4 justify-between my-2">
                  <p class="leading-relaxed text-sm text-justify w-1/2">
                    Gender
                  </p>
                  <p class="leading-relaxed text-sm text-justify w-1/2">
                    {{ person.gender }}
                  </p>
                </div>
                <div class="flex flex-row space-x-4 justify-between my-2">
                  <p class="leading-relaxed text-sm text-justify w-1/2">
                    Skin Color
                  </p>
                  <p class="leading-relaxed text-sm text-justify w-1/2">
                    {{ person.skin_color }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardsPeople from "@/components/CardsPeople";
import HeaderComponent from "@/components/Header";
export default {
  components: {
    CardsPeople,
    HeaderComponent,
  },
  data() {
    return {
      person: null,
    };
  },
  async mounted() {
    fetch(`https://swapi.dev/api/people/${this.$route.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.person = data;
      });
  },
};
</script>