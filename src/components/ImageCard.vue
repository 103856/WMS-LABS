<template>
    <div class="image-card">
      <img 
        v-if="data.imageSrc" 
        :src="data.imageSrc" 
        :alt="data.imageAlt || 'Image'" 
        class="card-image" 
      />
      <TitleDescription 
        :title="data.title" 
        :description="data.description" 
        :align="data.align" 
      />
    </div>
  </template>
  
  <script>
  import TitleDescription from './TitleDescription.vue';
  
  export default {
    name: 'ImageCard',
    components: {
      TitleDescription,
    },
    props: {
      data: {
        type: Object,
        required: true,
        default: () => ({
          imageSrc: '',
          imageAlt: '',
          title: '',
          description: '',
          align: 'center',
        }),
      },
    },
  };
  </script>
  
  <style scoped>
  .image-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    max-width: 600px;
    margin: 2rem auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .card-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    max-height: 400px;
  }
  
  @media (max-width: 768px) {
    .card-image {
      max-height: 300px;
    }
  }
  </style>
  