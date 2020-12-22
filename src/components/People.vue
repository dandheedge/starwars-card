<template>
  <div>
    <section class="text-gray-200">
      <HeaderComponent />
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 w-full">
        <cards-people
          v-for="(person, index) in people"
          :key="index"
          :name="person.name"
          :birthYear="person.birth_year"
          :eyeColor="person.eye_color"
          :link="index"
        />
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
      people: null,
    };
  },
  async mounted() {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => {
        this.people = data.results;
        console.log(data);
      });
  },
};
</script>