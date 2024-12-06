<template>
  <DefaultLayout>
    <CarouselHeader :slides="slides" />
    <div class="section solutions">
      <TitleDescription title="Nuestras Soluciones"
        description="Ofrecemos una gama de servicios diseñados para ayudarte a alcanzar tus objetivos tecnológicos."
        align="left" />
      <CardSection :cards="cardData" />
    </div>
    <div class="section why-us">
      <TitleDescription title="¿Por qué elegir WMS Labs?" description="" align="right" />

      <ImageCard :data="{
        imageSrc: 'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg',
        imageAlt: 'Imagen de ejemplo',
        title: 'Nuestras Soluciones',
        description: 'Ofrecemos una gama de servicios diseñados para ayudarte a alcanzar tus objetivos tecnológicos.',
        align: 'center'
      }" />

    </div>
    <div class="section why-us">
      <TitleDescription title="Tecnologías con las que trabajamos" description="" align="center" />
      <CategoryFilter :categories="categories" :items="items" />
    </div>
    
    <MiniGallery />
    <div>
      <TitleDescription title="Proceso de desarrollo"
      description="Este es el proceso de desarrollo para cualquier servicio ofrecido por WMS Labs" align="center" />
    </div>
    <TimelineSection :steps="steps" />
    <div class="section why-us">
      <TitleDescription title="¿Tienes una idea?" description="nosotros la hacemos realidad" align="center" />
      <button>Contáctanos</button>
    </div>
  </DefaultLayout>
</template>

<script>
import CarouselHeader from "@/components/CarouselHeader.vue";
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import TimelineSection from '@/components/TimelineSection.vue';
import CardSection from '@/components/CardSection.vue';
import GlassSplitSection from '@/components/GlassSplitSection.vue';
import TitleDescription from "@/components/TitleDescription.vue";
import MiniGallery from "@/components/MiniGallery.vue";
import CategoryFilter from "@/components/CategoryFilter.vue";
import categoriesItems from "@/data/categoriesItems.json";
import ImageCard from "@/components/ImageCard.vue";

export default {
  name: 'HomePage',
  components: {
    CardSection,
    ImageCard,
    GlassSplitSection,
    CarouselHeader,
    DefaultLayout,
    TitleDescription,
    CategoryFilter,
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
      slides: [
        {
          title: "Cautiva a tus clientes con sitios web impactantes",
          subtitle: "Creamos páginas web modernas, optimizadas y personalizadas para destacar en el mercado digital.",
          span: "Diseña tu presencia",
          image: "https://images.pexels.com/photos/3973978/pexels-photo-3973978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Potencia tu plataforma con integraciones eficientes",
          subtitle: "Integramos tu frontend con sistemas backend robustos para mejorar la experiencia del usuario y la escalabilidad.",
          span: "Conecta y optimiza",
          image: "https://images.pexels.com/photos/3973978/pexels-photo-3973978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          title: "Transforma ideas en aplicaciones exitosas",
          subtitle: "Desarrollamos aplicaciones innovadoras que resuelven problemas y generan valor para tu negocio.",
          span: "Impulsa tu visión",
          image: "https://images.pexels.com/photos/3973978/pexels-photo-3973978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
      categories: categoriesItems.categories,
      items: categoriesItems.items,
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
      ]
    };
  },
};
</script>

<style scoped>
.section {
  min-height: 100vh;
}
</style>
