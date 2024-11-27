<template>
    <DefaultLayout>
      <section id="contenido" class="content-section styled-section">
        <h2 class="aboutUs">Sobre nosotros</h2>
        <p class="Description">
          En WMSLabs, somos un equipo apasionado por la tecnología y la innovación.
        </p>
      </section>
    </DefaultLayout>
  </template>
  
  <script>
  import DefaultLayout from '@/layouts/DefaultLayout.vue';  // Verifica la ruta de importación
  
  export default {
    name: 'HomeView',
    components: {
      DefaultLayout,  // Asegúrate de registrar el componente
    },
  };
  </script>
  