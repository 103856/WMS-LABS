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
            Contacto <i class="bi bi-arrow-right-circle-fill"></i>
          </button>
        </div>

      </div>
      <div class="hero-image">
        <img src="https://pngimg.com/d/laptop_PNG101784.png" alt="Header Image" />
      </div>
    </div>
    <div class="mini-gallery-container">
      <MiniGallery :brands="brands" />
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
      brands: [
        { id: 1, icon: "amazon" },
        { id: 2, icon: "amd" },
        { id: 3, icon: "bing" },
        { id: 4, icon: "browser-edge" },
        { id: 4, icon: "facebook" },
        { id: 4, icon: "gitlab" },
        { id: 4, icon: "google" },
        { id: 4, icon: "nvidia" },
        { id: 4, icon: "nintendo-switch" },
        { id: 4, icon: "paypal" },
        { id: 4, icon: "pinterest" },
        { id: 4, icon: "playstation" },
      ],
    };
  },
};
</script>