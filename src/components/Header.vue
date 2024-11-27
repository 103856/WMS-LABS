<template>
  <header class="hero">
    <div class="hero-content">
      <h5>{{ span }}</h5>
      <h1 v-html="titulo"></h1>
      <p>{{ subtitulo }}</p>
      <button @click="$emit('scroll')">
        Saber más <i class="bi bi-arrow-right-circle"></i>
      </button>
    </div>
    <div class="hero-image">
      <img
        src="https://plus.unsplash.com/premium_photo-1681666713677-8bd559bef6bb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fHww"
        alt="Imagen hero"
      />
    </div>

    <!-- Nuevo contenedor para la MiniGallery -->
    <div class="mini-gallery-container">
      <MiniGallery :clientes="clientes" />
    </div>
  </header>
</template>

<script>
import MiniGallery from "@/components/MiniGallery.vue";

export default {
  name: "Header",
  components: {
    MiniGallery,
  },
  props: {
    titulo: {
      type: String,
      required: true,
    },
    subtitulo: {
      type: String,
      required: true,
    },
    span: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      clientes: [
        { id: 1, nombre: "Cliente 1", icono: "house" },
        { id: 2, nombre: "Cliente 2", icono: "gear" },
        { id: 3, nombre: "Cliente 3", icono: "people" },
        { id: 4, nombre: "Cliente 4", icono: "briefcase" },
      ],
    };
  },
};
</script>