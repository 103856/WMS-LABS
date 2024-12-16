<template>
  <DefaultLayout>
    <CarouselHeader :slides="slides" />
    <div class="section solutions">
      <transition name="slide-fade" appear>
        <TitleDescription v-if="showTitle" title="¿Qué hacemos en WMS Labs?"
          description="Ofrecemos una gama de servicios diseñados para ayudarte a alcanzar tus objetivos tecnológicos."
          align="center" />
      </transition>
      <CardSection :cards="cardData" />
    </div>
    <div class="section featured">
      <TitleDescription title="Servicios destacados" description="" align="center" />


      <DynamicGallery :cards="dynamicCardsData" />
    </div>
    <div class="section techs">
      <TitleDescription title="Tecnologías con las que trabajamos"
        description="Estamos a la vanguardia del mercado utilizando los ultimos framweorks y tecnologías para que nuestros clientes tengan seguridad"
        align="left" />
      <CategoryFilter :categories="categories" :items="items" />
    </div>

    <div class="section featured">
      <TitleDescription title="Proceso de desarrollo"
        description="Este es el proceso de desarrollo para cualquier servicio ofrecido por WMS Labs" align="center" />
      <TimelineSection :steps="steps" />
    </div>
    <div class="section contact">
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
import DynamicGallery from "@/components/DynamicGallery.vue";

export default {
  name: 'HomePage',
  components: {
    CardSection,
    DynamicGallery,
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
      showTitle: true,
      steps: [
        { icon: 'bi bi-gear-fill', title: 'Paso 1', description: 'Descripción del primer paso.' },
        { icon: 'bi bi-search', title: 'Paso 2', description: 'Descripción del segundo paso.' },
        { icon: 'bi bi-bar-chart-line', title: 'Paso 3', description: 'Descripción del tercer paso.' },
        { icon: 'bi bi-house-fill', title: 'Paso 4', description: 'Descripción del cuarto paso.' },
      ],
      slides: [
        {
          image: 'website-mockup.png',
          span: 'Diseña tu presencia',
          title: 'Cautiva a tus clientes </br> con sitios web </br> impactantes',
          subtitle: 'Creamos páginas web modernas, optimizadas y personalizadas para destacar en el mercado digital.',
          theme: 'dark',
        },
        {
          image: 'laptop-mockup.png',
          span: 'Conecta y optimiza',
          title: 'Potencia tu plataforma </br> con integraciones  </br>eficientes',
          subtitle: 'Integramos tu frontend con sistemas backend robustos para mejorar la experiencia del usuario y la escalabilidad.',
          theme: 'light',
        },
        {
          image: 'slide3.jpg',
          span: 'Impulsa tu visión',
          title: 'Conecta y optimiza',
          subtitle: 'Desarrollamos aplicaciones innovadoras que resuelven problemas y generan valor para tu negocio.',
          theme: 'dark',
        }
      ],
      dynamicCardsData: [
        { name: "Páginas Web", location: "Technology", image: "website-mockup.png", description: "Descripción de Swagger" },
        { name: "Integraciones", location: "Karachay-Cherkessia", image: "path/to/dombay.jpg", description: "Descripción de Dombay" },
        { name: "Teletskiy", location: "Altai Republic", image: "path/to/teletskiy.jpg", description: "Descripción de Teletskiy" },
        { name: "Sheregesh", location: "Siberia", image: "path/to/sheregesh.jpg", description: "Descripción de Sheregesh" },
        { name: "Big Wood", location: "Murmansk", image: "path/to/big_wood.jpg", description: "Descripción de Big Wood" },
        { name: "Elbrus", location: "Caucasus", image: "path/to/elbrus.jpg", description: "Descripción de Elbrus" },
        { name: "Sochi", location: "Black Sea", image: "path/to/sochi.jpg", description: "Descripción de Sochi" },
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
  background-color: var(--color-ice-white);
  padding: 50px 20px;
  color: var(--color-dark-blue);

}

.section.techs {
  border-radius: 5rem 5rem 0 0;
  background-color: var(--color-dark-blue);
  text-align: center;
  padding: 4rem 4rem;
  color: var(--color-light-gray);
  
  .title-description {
    padding-right: 20rem;
  }
}

.section.contact {
  background-color: var(--color-ice-white);
  padding: 50px 20px;
  color: var(--color-dark-blue);

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