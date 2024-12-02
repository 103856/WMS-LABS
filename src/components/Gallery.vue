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
        { src: "https://images.pexels.com/photos/360438/pexels-photo-360438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Imagen 1" },
        { src: "https://images.pexels.com/photos/17469127/pexels-photo-17469127/free-photo-of-mujer-mano-tecnologia-sujetando.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Imagen 2" },
        { src: "https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Imagen 3" },
        { src: "https://images.pexels.com/photos/11025645/pexels-photo-11025645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", alt: "Imagen 4" },
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
  h2{
    color: var(--color-ice-white);
    font-weight: 600;
  }
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
