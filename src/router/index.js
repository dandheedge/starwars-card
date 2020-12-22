import Vue from "vue";
import Router from "vue-router";
import People from "@/components/People";
import Movies from "@/components/Movies";
import DetailsChar from "@/components/DetailsChar";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "People",
      component: People
    },
    {
      path: "/people",
      name: "People",
      component: People
    },
    {
      path: "/people/:id",
      name: "PeopleDetails",
      component: DetailsChar
    },
    {
      path: "/movies",
      name: "Movies",
      component: Movies
    }
  ]
});
