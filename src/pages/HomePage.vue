<template>
  <DefaultLayout>
    <CarouselHeader :slides="slides" />

    <GlassSplitSection />

    <CardSection :cards="cardData" />
    <Gallery />
    <TimelineSection :steps="steps" />
  </DefaultLayout>
</template>

<script>
import CarouselHeader from "@/components/CarouselHeader.vue";
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import TimelineSection from '@/components/TimelineSection.vue';
import CardSection from '@/components/CardSection.vue';
import GlassSplitSection from '@/components/GlassSplitSection.vue';
import Gallery from '@/components/StaticGallery.vue';

export default {
  name: 'HomePage',
  components: {
    CardSection,
    GlassSplitSection,
    CarouselHeader,
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
      slides: [
        {
          titulo: "Cautiva a tus clientes con sitios web impactantes",
          subtitulo: "Creamos páginas web modernas, optimizadas y personalizadas para destacar en el mercado digital.",
          span: "Diseña tu presencia",
          image: "https://images.pexels.com/photos/21228355/pexels-photo-21228355/free-photo-of-telefono-inteligente-ordenador-portatil-tecnologia-teclado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          titulo: "Potencia tu plataforma con integraciones eficientes",
          subtitulo: "Integramos tu frontend con sistemas backend robustos para mejorar la experiencia del usuario y la escalabilidad.",
          span: "Conecta y optimiza",
          image: "https://images.pexels.com/photos/14666034/pexels-photo-14666034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          titulo: "Transforma ideas en aplicaciones exitosas",
          subtitulo: "Desarrollamos aplicaciones innovadoras que resuelven problemas y generan valor para tu negocio.",
          span: "Impulsa tu visión",
          image: "https://images.pexels.com/photos/3973978/pexels-photo-3973978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],

    };
  },
};
</script>
