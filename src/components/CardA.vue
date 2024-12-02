<template>
    <div class="card">
      <i :class="`bi bi-${icon}`" class="card-icon"></i>
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardA",
    props: {
      icon: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
  };
  </script>
  
  <style scoped>
  .card {
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    width: 300px;
    min-height: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .card-icon {
    font-size: 40px;
    color: var(--color-secondary-yellow);
    margin-bottom: 15px;
  }
  .card-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  .card-description {
    font-size: 1rem;
    color: #6c757d;
  }
  </style>
  