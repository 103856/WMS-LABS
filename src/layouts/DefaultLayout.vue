<template>
  <div>
    <NavigationMenu />

    <Header :titulo="title" :subtitulo="subtitle" :span="span" @scroll="scrollToContent" />

    <main id="contenido">
      <GlassSplitSection title="Transforma tu futuro" />

      <CardSection :cards="cardData" />
      <Gallery />

      <slot />
    </main>

    <!-- Pie de página -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import NavigationMenu from '@/components/NavigationMenu.vue';
import CardSection from '@/components/CardSection.vue';
import GlassSplitSection from '@/components/GlassSplitSection.vue';
import Gallery from '@/components/Gallery.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    NavigationMenu,
    CardSection,
    GlassSplitSection,
    Gallery,
    Footer
  },
  data() {
    return {
      span: 'SOFTWARE',
      title: 'Transforma tu negocio <br /> con software innovador',
      subtitle: 'Creamos soluciones escalables que impulsan el crecimiento rentable',
      cardData: [
        {
          icon: 'code-slash',
          title: 'Desarrollo ágil',
          description: 'Implementamos metodologías ágiles para entregar resultados rápidos y eficientes.',
          type: 'A', 
        },
        {
          icon: 'cloud-upload',
          title: 'Soluciones en la nube',
          description: 'Migramos y gestionamos tus sistemas en la nube para mayor escalabilidad y seguridad.',
          type: 'A', 
        },
        {
          icon: 'graph-up-arrow',
          title: 'Optimización de procesos',
          description: 'Digitalizamos y optimizamos procesos para maximizar la eficiencia de tu negocio.',
          type: 'A', 
        },
      ],
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

<style scoped>
main {
  padding: 2rem 1rem;
}

footer.footer {
  text-align: center;
  background-color: #f8f9fa;
  font-size: 0.9rem;
  color: #6c757d;
}
</style>
