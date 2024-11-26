<template>
  <section id="galeria" class="gallery-section">
    <h2>Galería</h2>
    <div class="gallery-grid">
      <div
        v-for="(imagen, index) in imagenes"
        :key="index"
        class="gallery-item"
        @click="openModal(imagen)"
      >
        <img :src="imagen.src" :alt="imagen.alt" />
      </div>
    </div>
    <ImageModal
      v-if="modalOpen"
      :isOpen="modalOpen"
      :imageSrc="selectedImage.src"
      :imageAlt="selectedImage.alt"
      @close="modalOpen = false"
    />
  </section>
</template>

<script>
import ImageModal from "./ImageModal.vue";

export default {
  components: { ImageModal },
  data() {
    return {
      imagenes: [
        { src: "https://via.placeholder.com/300", alt: "Imagen 1" },
        { src: "https://via.placeholder.com/300", alt: "Imagen 2" },
        { src: "https://via.placeholder.com/300", alt: "Imagen 3" },
        { src: "https://via.placeholder.com/300", alt: "Imagen 4" },
      ],
      modalOpen: false,
      selectedImage: {},
    };
  },
  methods: {
    openModal(imagen) {
      this.selectedImage = imagen;
      this.modalOpen = true;
    },
  },
};
</script>

<style>
.gallery-section {
  padding: 40px 20px;
  text-align: center;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.gallery-item img {
  width: 100%;
  border-radius: 8px;
  transition: transform 0.3s ease;
}
.gallery-item img:hover {
  transform: scale(1.05);
}
</style>
