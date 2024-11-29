<template>
  <footer class="footer bg-dark text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h5 class="footer-title">Enlaces Útiles</h5>
          <ul class="list-unstyled">
            <li><router-link to="/productPage" class="footer-link">Producto</router-link></li>
            <li><router-link to="/AboutUsPage" class="footer-link">Sobre Nosotros</router-link></li>
            <li><router-link to="/contactPage" class="footer-link">Contacto</router-link></li>
            <li><router-link to="/privacy-policy" class="footer-link">Política de Privacidad</router-link></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="footer-title">Redes Sociales</h5>
          <ul class="list-unstyled">
            <li><a href="https://www.linkedin.com" class="footer-link text-white"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
            <li><a href="https://www.github.com" class="footer-link text-white"><i class="fab fa-github"></i> GitHub</a></li>
            <li><a href="https://www.twitter.com" class="footer-link text-white"><i class="fab fa-twitter"></i> Twitter</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="footer-title">Sobre Nosotros</h5>
          <p>En WMS Labs, nos especializamos en ofrecer soluciones de desarrollo de software a medida, con un enfoque en la innovación, escalabilidad y rendimiento. Transformamos tu negocio con las últimas tecnologías.</p>
        </div>
        <div class="col-md-3">
          <h5 class="footer-title">Contacto</h5>
          <p>Email: contacto@milanlandingpage.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
      </div>
      <hr class="bg-light">
      <div class="text-center">
        <p>© 2024 WMS Labs. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  background-color: #000000 !important;
}

.footer-title {
  font-weight: bold;
  font-size: 1.5rem; 
  margin-bottom: 1rem;
}

.footer-link {
  text-decoration: none;
  color: #fff;
  margin-bottom: 0.5rem;
  display: block;
  font-size: 1.2rem; 
}

.footer-link:hover {
  color: #00df82;
}

.text-white {
  color: #fff !important;
}

ul {
  padding-left: 0;
}

ul li {
  margin-bottom: 0.5rem;
}

p {
  margin-top: 1rem;
  font-size: 1rem;
}

hr.bg-light {
  border-color: #fff;
}
</style>
