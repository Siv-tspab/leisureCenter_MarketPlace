<template>
  <Home />
</template>

<script>
import Home from "./components/Home.vue";
import Api from "./Api/api";

export default {
  name: "App",
  components: {
    Home,
  },
  mounted() {
    const api = new Api();
    api
      .getAll("leisure_centers")
      .then((data) => this.$store.dispatch("setCenters", data));
    api
      .getAll("leisure_categories")
      .then((data) => this.$store.dispatch("setCategories", data));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}
:root {
  --text-main: #2c3e50;
  --text-secondary: #cfdbe7;
  --color-gray-light: #afafaf;
}
.loading {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
