<template>
  <Home v-if="categories !== [] && centers !== []" />
  <div class="flex-center">
    <button v-if="!isLoading" class="btn" @click="fetchCenters()">
      Voir plus
    </button>
    <Loader v-if="isLoading" />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Api from "./Api/api";
import Loader from "./components/Utils/Loader.vue";

export default {
  name: "App",
  data() {
    return {
      api: new Api(),
      isLoading: false,
    };
  },
  components: {
    Home,
    Loader,
  },
  computed: {
    centers() {
      return this.$store.getters.getCenters;
    },
    categories() {
      return this.$store.getters.getCategories;
    },
    page() {
      return this.$store.getters.getPage;
    },
  },
  mounted() {
    this.fetchCenters();
    this.fetchCategories();
  },
  methods: {
    fetchCenters() {
      this.isLoading = true;
      this.api
        .getAll("leisure_centers", [["page", this.page + 1]])
        .then((data) => {
          this.$store.dispatch("setCenters", data);
          this.$store.dispatch("setPage", this.page + 1);
        })
        .then(() => (this.isLoading = false));
    },
    fetchCategories() {
      this.isLoading = true;
      this.api
        .getAll("leisure_categories")
        .then((data) => this.$store.dispatch("setCategories", data))
        .then(() => (this.isLoading = false));
    },
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
  --color-blue: #3f93dc;
  --color-gray: #777777;
  --color-gray-blue: #788896;
  --color-gray-light: #c3cfd9;
}
.loading-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 20px;
  width: 100%;
  text-align: center;
  position: relative;
}
.btn {
  background-color: var(--color-gray-blue);
  cursor: pointer;
  color: white;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  border: none;
  margin-block: 2rem;
}
.btn:hover {
  background-color: var(--color-blue);
}
</style>
