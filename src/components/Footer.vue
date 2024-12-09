<template>
  <footer class="footer py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h5 class="footer-title">Enlaces Útiles</h5>
          <ul class="list-unstyled">
            <li><router-link to="/productPage" class="footer-link">Producto</router-link></li>
            <li><router-link to="/AboutUsPage" class="footer-link">Sobre Nosotros</router-link></li>
            <li><router-link to="/contactPage" class="footer-link">Contacto</router-link></li>
            <li><router-link to="#" class="footer-link">Política de Privacidad</router-link></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="footer-title">Nuestras redes</h5>
          <ul class="list-unstyled social">
            <a href="https://www.linkedin.com" class="socialContainer ln"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.github.com" class="socialContainer gh"><i class="fab fa-github"></i></a>
            <a href="https://www.twitter.com" class="socialContainer x"><i class="bi bi-twitter-x"></i></a>
          </ul>
        </div>
        <div class="col-md-3">
          <h5 class="footer-title">Sobre Nosotros</h5>
          <p>En WMS Labs, nos especializamos en ofrecer soluciones de desarrollo de software a medida, con un enfoque en
            la innovación, escalabilidad y rendimiento. Transformamos tu negocio con las últimas tecnologías.</p>
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
  background-color: var(--color-secondary-dark-blue);
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-ice-white);
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
  color: var(--color-secondary-yellow);
  transition: 0.5s;
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

main {
  padding: 2rem 1rem;
}

.social {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.socialContainer {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: .3s;
  border-radius: 5px;
}

.ln:hover {
  background-color: #000268;
  transition-duration: .3s;
}

.gh:hover {
  background-color: #686868;
  transition-duration: .3s;
}

.x:hover {
  background-color: #222222;
  transition-duration: .3s;
}

.socialContainer:active {
  transform: scale(0.9);
  transition-duration: .3s;
}
</style>