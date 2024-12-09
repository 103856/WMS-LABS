<template>
  <nav class="navbar navbar-expand-lg custom-navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <router-link class="navbar-brand" to="/">WMS Labs</router-link>

      <!-- navbar toggler media screen -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <input type="checkbox" id="checkbox">
        <label for="checkbox" class="toggle">
          <div class="bars" id="bar1"></div>
          <div class="bars" id="bar2"></div>
          <div class="bars" id="bar3"></div>
        </label>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/ProductPage">Servicios</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/WorksPage">Trabajos</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/AboutUsPage">Sobre Nosotros</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ContactPage">Contacto</router-link>
          </li>
        </ul>

        <div class="d-flex">
          <a class="btn btn-primary" href="/ContactPage">Contáctanos</a>
        </div>
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

<style>
.navbar {
  top: 0;
  padding: 15px 0;
  width: 100%;
  background: transparent;
  transition: 0.3s ease;
  position: fixed;
  z-index: 1000;
}

.navbar.scrolled {
  border-radius: 0 0 12px 12px;
  background-color: rgba(255, 255, 255, 0.178);
  backdrop-filter: blur(40px);
}

.navbar-brand,
.nav-item a {
  color: var(--color-light-gray);
  font-weight: 500;
}

.navbar-brand:hover,
.nav-item a:hover {
  color: var(--color-secondary-yellow);
  transition: 0.5s;
}

.btn-primary {
  background-color: var(--color-secondary-yellow);
  border: none;
  color: white;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
}

.btn-primary:hover {
  background-color: var(--color-dark-blue);
  transition: 0.3s ease;
}

#checkbox {
  display: none;
}

.navbar-toggler {
  border: none;

  :focus {
    box-shadow: none;
  }

}

.navbar-toggler:active .navbar {

  border-radius: 0 0 12px 12px;
  background-color: rgba(255, 255, 255, 0.178);
  backdrop-filter: blur(40px);

}

.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .5s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: var(--color-secondary-yellow);
  border-radius: 4px;
}

#bar2 {
  transition-duration: .8s;
}

#bar1,
#bar3 {
  width: 70%;
}

#checkbox:checked+.toggle .bars {
  position: absolute;
  transition-duration: .5s;
}

#checkbox:checked+.toggle #bar2 {
  transform: scaleX(0);
  transition-duration: .5s;
}

#checkbox:checked+.toggle #bar1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: .5s;
}

#checkbox:checked+.toggle #bar3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: .5s;
}

#checkbox:checked+.toggle {
  transition-duration: .5s;
  transform: rotate(180deg);
}
</style>
