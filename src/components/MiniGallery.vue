<template>
    <section class="mini-gallery flex-center">
      <h2>Nuestros Clientes</h2>
      <div class="icon-slider">
        <div class="icon-container" v-for="cliente in clientes" :key="cliente.id">
          <i :class="`bi bi-${cliente.icono}`" aria-hidden="true"></i>
          <p>{{ cliente.nombre }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "MiniGallery",
    props: {
      clientes: {
        type: Array,
        required: true,
        default: () => [],
      },
    },
  };
  </script>
  