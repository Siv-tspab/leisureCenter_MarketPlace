<template>
  <header id="mapContainer" class="map"></header>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  name: "BaseMap",
  data() {
    return {
      accessToken: process.env.VUE_APP_MB_API_KEY,
      map: Object,
    };
  },
  computed: {
    centers() {
      return this.$store.getters.getCurrentCenters;
    },
  },
  mounted() {
    mapboxgl.accessToken = this.accessToken;
    this.map = new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [1.75, 47],
      zoom: 5,
    });
  },
};
</script>

<style>
.map {
  height: 60%;
  width: 100%;
  background: var(--color-gray-light);
  border-radius: 3px;
}
</style>