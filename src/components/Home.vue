<template>
  <div class="page">
    <header class="map"></header>
    <section class="input-container">
      <input
        class="input search"
        placeholder="Rechercher une base loisirs"
        type="text"
        v-model="searchText"
      />
      <select class="input select" name="" id="" @change="setCategory($event)">
        <option defaultValue disabled value="0">Filtrer par catégorie</option>
        <option value="0">Toutes les catégories</option>
        <option
          v-bind:key="category.id"
          v-for="category in categories"
          class="grid-item"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </section>
    <main class="masonry-grid">
      <div v-bind:key="center.id" v-for="center in centers" class="grid-item">
        {{ center.name }}
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    centers() {
      return this.$store.getters.getCurrentCenters;
    },
    categories() {
      return this.$store.getters.getCategories;
    },
    category() {
      return this.$store.getters.getCurrentCategory;
    },
  },
  methods: {
    setCategory(e) {
      this.$store.dispatch("setCurrentCategory", parseInt(e.target.value));
      this.$store.dispatch("setCurrentCenters", parseInt(e.target.value));
    },
  },
};
</script>

<style scoped>
.page {
  height: calc(100% - 5rem);
  padding-top: 5rem;
  padding-inline: 10rem;
}
.map {
  height: 50%;
  background: var(--color-gray-light);
}
.input-container {
  display: flex;
  justify-content: space-between;
  margin-block: 2rem;
}
.input {
  padding-block: 0;
  padding-inline: 8px;
  font-size: 1rem;
}
.input:focus {
  outline: none;
}
.search {
  height: 2rem;
  width: 75%;
  margin-right: 1rem;
  font-weight: 600;
}
::placeholder {
  color: var(--color-gray-light);
}
.select {
  height: 2.3rem;
  width: 25%;
}
.masonry-grid {
  background-color: var(--color-gray-light);
  min-height: 30%;
}
</style>
