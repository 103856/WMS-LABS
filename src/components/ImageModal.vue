<template>
    <div v-if="isOpen" class="modal">
      <div class="modal-overlay" @click="closeModal"></div>
      <div class="modal-content">
        <img :src="imageSrc" :alt="imageAlt" />
        <button class="close-btn" @click="closeModal">X</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: Boolean,
      imageSrc: String,
      imageAlt: String,
    },
    methods: {
      closeModal() {
        this.$emit("close");
      },
    },
  };
  </script>
  
  <style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1000;
  }
  .modal-content {
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
  .modal-content img {
    max-width: 100%;
    height: auto;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  </style>
  