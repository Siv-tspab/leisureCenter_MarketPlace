<template>
  <section class="input-container">
    <input
      class="input search"
      placeholder="Rechercher une base loisirs"
      type="text"
      v-model="searchText"
    />
    <select class="input select" name="" id="" @change="setCategory($event)">
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
</template>

<script>
export default {
  name: "Inputs",
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
    searchText: {
      get() {
        return this.$store.getters.getSearchText;
      },
      set(value) {
        this.$store.dispatch("setSearchText", value);
      },
    },
  },
  methods: {
    setCategory(e) {
      this.$store.dispatch("setCurrentCategory", parseInt(e.target.value));
    },
  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  justify-content: space-between;
  margin-block: 2rem;
}
.input {
  padding-block: 0;
  padding-inline: 8px;
  font-size: 1rem;
  border: 2px solid var(--color-gray-light);
  border-radius: 3px;
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
</style>