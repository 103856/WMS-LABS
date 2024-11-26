<template>
    <header class="hero">
      <h1>{{ titulo }}</h1>
      <p>{{ subtitulo }}</p>
      <button @click="scrollToContent">Saber más</button>
    </header>
  </template>
  
  <script>
  export default {
    props: {
      titulo: String,
      subtitulo: String,
    },
    methods: {
      scrollToContent() {
        const element = document.getElementById('contenido');
        element.scrollIntoView({ behavior: 'smooth' });
      },
    },
  };
  </script>
  