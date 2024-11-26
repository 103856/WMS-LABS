<template>
  <div id="app">
    
    <header class="hero">
      <h1 v-html="titulo"></h1>
      <p>{{ subtitulo }}</p>
      <button class="btn btn-lg btn-primary shadow-lg rounded-pill text-white" @click="scrollToContent">
  Descubre cómo
</button>
    </header>

    <!-- Navigation Menu -->
    <NavigationMenu />

    <main>
      <!-- Sobre Nosotros Section -->
      <section id="contenido" class="content-section">
        <h2 class="aboutUs">Sobre nosotros</h2>
        <p class="Description">En WMSLabs, somos un equipo apasionado por la tecnología y la innovación. Nos especializamos en el desarrollo de soluciones de software diseñadas para impulsar el crecimiento de empresas de todos los tamaños. Nuestra misión es crear productos digitales rentables y escalables que no solo resuelvan problemas, sino que generen un impacto positivo a largo plazo.</p>
      </section>

      <!-- Gallery Section -->
      <Gallery />
    </main>

    <!-- Footer Section -->
    <footer class="footer">
      <p>© 2024 Mi Landing Page. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import NavigationMenu from './components/NavigationMenu.vue';
import Gallery from './components/Gallery.vue';

export default {
  components: {
    Header,
    Footer,
    NavigationMenu,
    Gallery,
  },
  data() {
    return {
      titulo: 'Transforma tu negocio <br /> con software innovador',
      subtitulo: 'Creamos soluciones escalables que impulsan el crecimiento rentable',
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

<style>

  .hero h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 3rem; 
  text-align: center;
  margin-bottom: 20px;
}  
.aboutUs {
  font-family: 'Poppins', sans-serif;
}
.Description{
  font-family: 'Poppins', sans-serif;
  font-size: 25px;
}

.hero p {
  font-family: 'Poppins', sans-serif;
  
}

.hero .btn-custom {
  background: linear-gradient(45deg, #6a11cb, #2575fc); /* Degradado de azul */
  color: white;
  border: none;
}

.hero .btn-custom:hover {
  background: linear-gradient(45deg, #2575fc, #6a11cb); /* Cambio de colores al pasar el ratón */
  color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* Global Styles */
body {
  font-family: 'Poppins', sans-serif;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Hero Section */
.hero {
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  color: white;
  text-align: center;
  padding: 50px 20px;
  margin-top: 60px;
}


/* Content Section */
.content-section {
  padding: 40px 20px;
  text-align: center;
}

/* Footer Section */
.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
}

/* Navigation Styles */
.nav {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.nav ul {
  display: flex;
  list-style-type: none;
  justify-content: center;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav ul li a:hover {
  color: #aaa;
}

/* Gallery Styles */
.gallery-section {
  padding: 40px 20px;
  text-align: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.gallery-item img {
  width: 100%;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.05);
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 10px;
}

.modal-content img {
  max-width: 100%;
  height: auto;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
