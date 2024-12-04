<template>
  <header class="hero">
    <div class="hero-layout">
      <div class="hero-content">
        <h5>{{ span }}</h5>
        <h1 v-html="titulo"></h1>
        <p>{{ subtitulo }}</p>

        <div class="cta-content">
          <button @click="$emit('scroll')">
            Saber más <i class="bi bi-arrow-right-circle-fill"></i>
          </button>
          <button @click="$emit('scroll')" class="contact-button">
            <router-link to="/ContactPage">
              Contacto <i class="bi bi-arrow-right-circle-fill"></i>
            </router-link>
          </button>
        </div>
      </div>

      <!-- Galería opcional -->
      <slot name="gallery"></slot>

      <div class="hero-image">
        <img src="/src/assets/img/app-hero-preview.png" alt="Header Image" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    titulo: { type: String, required: true },
    subtitulo: { type: String, required: true },
    span: { type: String, required: true },
  },
};
</script>
