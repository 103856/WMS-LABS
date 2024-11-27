<template>
    <div>
      <Header 
        :titulo="title" 
        :subtitulo="subtitle" 
        :span="span" 
        @scroll="scrollToContent" 
      />
      <NavigationMenu />
      <main>
        <slot /> <!-- Aquí se inserta el contenido específico de cada página -->
      </main>
      <footer class="footer">
        <p>© 2024 Mi Landing Page. Todos los derechos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import NavigationMenu from '@/components/NavigationMenu.vue';
  
  export default {
    name: 'DefaultLayout',
    components: {
      Header,
      NavigationMenu,
    },
    data() {
      return {
        span: 'SOFTWARE',
        title: 'Transforma tu negocio <br /> con software innovador',
        subtitle: 'Creamos soluciones escalables que impulsan el crecimiento rentable',
      };
    },
    methods: {
      scrollToContent() {
        const element = document.getElementById('contenido');
        element.scrollIntoView({ behavior: 'smooth' });
      },
    },
  };
  </script>
  