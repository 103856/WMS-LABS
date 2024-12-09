<template>
  <DefaultLayout>
    <CarouselHeader :slides="slides" />
    <div class="section solutions">
      <TitleDescription title="¿Qué hacemos en WMS Labs?"
        description="Ofrecemos una gama de servicios diseñados para ayudarte a alcanzar tus objetivos tecnológicos."
        align="center" />
      <CardSection :cards="cardData" />
    </div>
    <div class="section featured">
      <TitleDescription title="Servicios destacados" description="" align="right" />
      
      <ImageCard :data="{
        imageSrc: 'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg',
        imageAlt: 'Imagen de ejemplo',
        title: 'Nuestras Soluciones ',
        description: 'Ofrecemos una gama de servicios diseñados para ayudarte a alcanzar tus objetivos tecnológicos.',
        align: 'center'
      }" />

    </div>
    <div class="section featured">
      <TitleDescription title="Tecnologías con las que trabajamos" description="" align="center" />
      <CategoryFilter :categories="categories" :items="items" />
    </div>

    <div>
      <TitleDescription title="Proceso de desarrollo"
        description="Este es el proceso de desarrollo para cualquier servicio ofrecido por WMS Labs" align="center" />
    </div>
    <TimelineSection :steps="steps" />
    <div class="section featured">
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
import CategoryFilter from "@/components/CategoryFilter.vue";
import categoriesItems from "@/data/categoriesItems.json";
import ImageCard from "@/components/ImageCard.vue";
import '@/assets/img/website-mockup.png'

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
          title: "Cautiva a tus clientes </br> con sitios web </br> impactantes",
          subtitle: "Creamos páginas web modernas, optimizadas y personalizadas para destacar en el mercado digital.",
          span: "Diseña tu presencia",
          image: 'website-mockup.png',
        },
        {
          title: "Potencia tu plataforma </br> con integraciones  </br>eficientes",
          subtitle: "Integramos tu frontend con sistemas backend robustos para mejorar la experiencia del usuario y la escalabilidad.",
          span: "Conecta y optimiza",
          image: "website-mockup.png",
        },
        {
          title: "Transforma ideas en aplicaciones </br> exitosas",
          subtitle: "Desarrollamos aplicaciones innovadoras que resuelven problemas y generan valor para tu negocio.",
          span: "Impulsa tu visión",
          image: "website-mockup.png",
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
  background-color: var(--color-dark-blue);
  margin-top: 0;
  color: aliceblue;
}

.section.solutions {
  background-color: var(--color-dark-blue);
  padding: 40px;
  border-radius: 0 0 4rem 0;
  margin-bottom: 2rem;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.21);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.21);
}

.section.featured {
  background-color: rgb(255, 255, 255);
  text-align: center;
  padding: 50px 20px;
}

.section.featured:last-of-type {
  background-color: var(--color-dark-blue);
  color: var(--color-light-gray);
  text-align: left;
}

.section.solutions .card {
  border: 1px solid var(--color-secondary-yellow);
}

.section.solutions h2 {
  color: var(--color-secondary-blue);
}

.section.featured .button {
  background-color: var(--color-light-gray);
  border-radius: 8px;
  color: var(--color-dark-blue);
}



.section span {
  color: aqua;
}
</style>
