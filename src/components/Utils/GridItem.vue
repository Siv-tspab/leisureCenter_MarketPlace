<template>
  <div class="grid-item">
    <div class="item-content">
      <h3 class="item-title">{{ center.name }}</h3>
      <p class="item-description">{{ center.description }}</p>
      <a class="link" :href="center.link"> Accéder au site web <LinkIcon /> </a>
      <span class="chip">{{ center.leisureCategory[0].name }}</span>
    </div>
  </div>
</template>

<script>
import LinkIcon from "../Icons/LinkIcon.vue";
export default {
  name: "GridItem",
  props: {
    center: Object,
  },
  components: {
    LinkIcon,
  },
};
</script>

<style scoped>
.grid-item {
  width: 33.333%;
}
.grid-item {
  float: left;
  height: fit-content;
}
.item-content {
  border: 2px solid var(--color-gray-light);
  border-radius: 2px;
  padding: 1rem;
  margin: 0.5rem;
}
.item-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
}
.item-description {
  margin-block: 1.5rem;
  line-height: 1.5rem;
  color: var(--color-gray);
  font-weight: 600;
}
.link {
  font-weight: 600;
  text-decoration: none;
  color: var(--color-blue);
  height: 1rem;
  width: 1rem;
}
.chip {
  display: block;
  margin-top: 1rem;
  width: max-content;
  background-color: var(--color-gray-blue);
  font-weight: 600;
  color: white;
  border-radius: 50px;
  padding: 0.5rem 1rem;
}
</style>