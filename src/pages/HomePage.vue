<template>
  <DefaultLayout>
    <Header :titulo="title" :subtitulo="subtitle" :span="span" @scroll="scrollToContent" />

    <GlassSplitSection />

    <CardSection :cards="cardData" />
    <Gallery />
    <TimelineSection :steps="steps" />
  </DefaultLayout>
</template>

<script>
import Header from '@/components/Header.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import TimelineSection from '@/components/TimelineSection.vue';
import CardSection from '@/components/CardSection.vue';
import GlassSplitSection from '@/components/GlassSplitSection.vue';
import Gallery from '@/components/StaticGallery.vue';

export default {
  name: 'HomePage',
  components: {
    Header,
    CardSection,
    GlassSplitSection,
    Gallery,
    DefaultLayout,
    TimelineSection,
  },
  data() {
    return {
      steps: [
        { icon: 'bi bi-gear-fill', title: 'Paso 1', description: 'Descripción del primer paso.' },
        { icon: 'bi bi-search', title: 'Paso 2', description: 'Descripción del segundo paso.' },
        { icon: 'bi bi-bar-chart-line', title: 'Paso 3', description: 'Descripción del tercer paso.' },
        { icon: 'bi bi-house-fill', title: 'Paso 4', description: 'Descripción del cuarto paso.' },
      ],
      span: 'SOFTWARE',
      title: 'Transforma tu negocio <br /> con software innovador',
      ltitle: 'Transforma tu negocio <br /> con software innovador',
      rtitle: 'Transforma tu negocio <br /> con software innovador',
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
};
</script>
