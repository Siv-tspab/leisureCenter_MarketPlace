<template>
  <div class="page">
    <Map />
    <Inputs />
    <MasonryGrid />
  </div>
</template>

<script>
import Map from "./Map.vue";
import Inputs from "./Inputs.vue";
import MasonryGrid from "./MasonryGrid.vue";
export default {
  name: "Home",
  components: {
    Map,
    Inputs,
    MasonryGrid,
  },
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
};
</script>

<style>
.page {
  height: calc(100% - 5rem);
  padding-top: 5rem;
  padding-inline: 20rem;
  position: relative;
}
</style>
