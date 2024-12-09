<template>
    <section class="mini-gallery flex-center">
      <h5>Teconologías usadas</h5>
      <div class="icon-slider">
        <div class="icon-container" v-for="brand in brands" :key="brand.id">
          <i :class="`bi bi-${brand.icon}`" aria-hidden="true"></i>
          <p>{{ brand.name }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "MiniGallery",
    props: {
      brands: {
        type: Array,
        required: true,
        default: () => [],
      },
    },
  };
  </script>
  