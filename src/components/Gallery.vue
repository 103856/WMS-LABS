<template>
    <div class="gallery-container">
      <button class="scroll-button left" @click="scrollLeft">
        <i class="bi bi-chevron-left"></i>
      </button>
  
      <div class="gallery-content" ref="scrollContainer">
        <div v-for="(item, index) in items" :key="index" class="gallery-item">
          <i :class="`bi ${item.icon}`" class="gallery-icon"></i>
          <p class="gallery-title">{{ item.title }}</p>
        </div>
      </div>
  
      <button class="scroll-button right" @click="scrollRight">
        <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Gallery",
    props: {
      items: {
        type: Array,
        required: true,
        default: () => [],
      },
    },
    methods: {
      scrollLeft() {
        this.$refs.scrollContainer.scrollBy({
          top: 0,
          left: -300, // Ajusta el desplazamiento según tus necesidades
          behavior: "smooth",
        });
      },
      scrollRight() {
        this.$refs.scrollContainer.scrollBy({
          top: 0,
          left: 300, // Ajusta el desplazamiento según tus necesidades
          behavior: "smooth",
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .gallery-container {
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  
  .gallery-content {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-behavior: smooth;
  }
  
  .gallery-item {
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    text-align: center;
  }
  
  .gallery-icon {
    font-size: 2rem;
    color: #007bff;
  }
  
  .gallery-title {
    margin-top: 0.5rem;
    font-weight: bold;
  }
  
  .scroll-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10;
  }
  
  .scroll-button.left {
    left: 0;
  }
  
  .scroll-button.right {
    right: 0;
  }
  </style>
  