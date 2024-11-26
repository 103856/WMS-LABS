<template>
  <div id="app">

    <header class="hero">
      <h1 v-html="titulo"></h1>
      <p>{{ subtitulo }}</p>
      <button class="btn btn-lg btn-primary shadow-lg rounded-pill text-white" @click="scrollToContent">
        Descubre cómo
      </button>
    </header>

    <NavigationMenu />

 
    <main>
      <router-view></router-view> 
    </main>

    
      <section id="contenido" class="content-section">
        <h2 class="aboutUs">Sobre nosotros</h2>
        <p class="Description">
          En WMSLabs, somos un equipo apasionado por la tecnología y la innovación. Nos especializamos en el desarrollo de soluciones de software diseñadas para impulsar el crecimiento de empresas de todos los tamaños. Nuestra misión es crear productos digitales rentables y escalables que no solo resuelvan problemas, sino que generen un impacto positivo a largo plazo.
        </p>
      </section>

    
     
  

    <footer class="footer">
      <p>© 2024 Mi Landing Page. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import NavigationMenu from './components/NavigationMenu.vue';

export default {
  components: {
    Header,
    Footer,
    NavigationMenu,
  
  },
  data() {
    return {
      titulo: 'Transforma tu negocio <br /> con software innovador',
      subtitulo: 'Creamos soluciones escalables que impulsan el crecimiento rentable',
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
