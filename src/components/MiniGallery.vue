<template>
    <section class="mini-gallery flex-center">
      <h2>Hemos colaborado con marcas como</h2>
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
  