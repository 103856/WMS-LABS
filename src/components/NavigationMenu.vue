<template>
  <nav class="navbar navbar-expand-lg custom-navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <a class="navbar-brand" href="#hero">WMS Labs</a>
      <button class="navbar-toggler" 
        type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ProductPage">Servicios</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/AboutUsPage">Sobre Nosotros</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ContactPage">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  name: "NavigationMenu",
  setup() {
    const isScrolled = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 10; 
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isScrolled,
    };
  },
};
</script>
