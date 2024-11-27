<template>
  <div id="app">
    <Header 
      :titulo="title" 
      :subtitulo="subtitle" 
      :span="span" 
      @scroll="scrollToContent" 
    />

    <NavigationMenu />

 
    <main>
      <section id="contenido" class="content-section styled-section">
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
