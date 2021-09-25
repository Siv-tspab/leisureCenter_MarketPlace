<template>
  <div class="page">
    <header class="map"></header>
    <section class="input-container">
      <input
        class="input search"
        placeholder="Rechercher une base loisirs"
        type="text"
      />
      <select class="input select" name="" id="">
        <option defaultValue disabled value="0">Filtrer par catégorie</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </section>
    <main class="masonry-grid">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home"
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
