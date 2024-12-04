<template>
  <div>
    <NavigationMenu />
    <main id="contenido">
      <slot />
    </main>
    <Footer />

  </div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue';
import CardSection from '@/components/CardSection.vue';
import GlassSplitSection from '@/components/GlassSplitSection.vue';
import Gallery from '@/components/StaticGallery.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    NavigationMenu,
    CardSection,
    GlassSplitSection,
    Gallery,
    Footer
  },
  methods: {
    scrollToContent() {
      const element = document.getElementById('contenido');
      element.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>
