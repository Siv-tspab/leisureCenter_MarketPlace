<template>
  <main class="main">
    <div class="masonry-grid" ref="grid">
      <div v-bind:key="centersGroup" v-for="centersGroup in centers">
        <div class="grid-sizer"></div>
        <GridItem
          v-bind:key="center.id"
          v-for="center in centersGroup"
          v-bind:center="center"
        />
      </div>
    </div>
  </main>
</template>

<script>

import Masonry from "masonry-layout";
import GridItem from "./Utils/GridItem.vue";

export default {
  name: "MasonryGrid",
  components: {
    GridItem,
  },
  computed: {
    centers() {
      return this.buildColumns(this.$store.getters.getCurrentCenters);
    },
  },
  mounted() {
    this.createGrid();
  },
  methods: {
    buildColumns(array) {
      let result = [[]];
      let index = 0;
      array.forEach((element) => {
        if (result[index].length >= 3) {
          index++;
          result.push([]);
        }
        result[index].push(element);
      });
      return result;
    },
    createGrid() {
      new Masonry(this.$refs.grid, {
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        horizontalOrder: true,
        gutter: 15,
      });
    },
  },
  watch: {
    centers() {
      this.createGrid();
    },
  },
};
</script>

<style >
.main {
  padding-top: 12px;
  position: relative;
  width: 100%;
  height: 100%;
}
.masonry-grid {
  max-width: 100%;
}
.grid:after {
  content: "";
  display: block;
  clear: both;
}
.grid-sizer {
  width: 33.333%;
}
.grid-item img {
  display: block;
  max-width: 100%;
}
</style>
