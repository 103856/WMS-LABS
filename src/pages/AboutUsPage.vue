<template>
  <div class="about-us">
  
    <div class="jumbotron text-center bg-primary text-black">
      <h1 class="display-4 fw-bold">WMS-LABS</h1>
      <p class="lead">Desarrollamos software a medida para hacer crecer tu negocio.</p>
    </div>


    <div class="container py-5">
      <div class="row align-items-start">
        <div class="col-md-6">
          <img
            src="https://img.freepik.com/fotos-premium/desarrolladores-software-colaboracion_1275912-41582.jpg"
            alt="Equipo trabajando"
            class="img-fluid rounded shadow border"
          />
        </div>
        <div class="col-md-6">
          <h2 class="mb-3 fw-bold text-primary">¿Quiénes somos?</h2>
          <p>
            Somos una empresa especializada en desarrollo de software con años de experiencia. Nuestro equipo está compuesto por profesionales altamente capacitados que utilizan las mejores tecnologías para brindar soluciones eficientes. Nos enorgullece trabajar con pasión, compromiso y creatividad para satisfacer las necesidades de nuestros clientes.
          </p>
          <h2 class="mt-4 mb-3 fw-bold text-primary">Nuestra misión</h2>
          <p>
            Ayudamos a empresas a mejorar su rendimiento a través de soluciones
            tecnológicas innovadoras. Nos especializamos en desarrollo ágil, diseño
            de software y aplicaciones adaptadas a tus necesidades.
          </p>
         

          <ul class="list-unstyled">
            <li>
              <i class="fas fa-check-circle text-success me-2"></i>
              Software personalizado
            </li>
            <li>
              <i class="fas fa-check-circle text-success me-2"></i>
              Equipos expertos en tecnología
            </li>
            <li>
              <i class="fas fa-check-circle text-success me-2"></i>
              Soporte técnico garantizado
            </li>
          </ul>
          <h2 class="mb-3 fw-bold text-primary">Nuestra Vision</h2>
          <p>
            ser líderes globales en el desarrollo de soluciones tecnológicas que transformen negocios y vidas. Nos esforzamos por construir un futuro donde la innovación sea accesible para todos, Queremos inspirar a empresas a soñar en grande y acompañarlas en el camino hacia el éxito, con herramientas que no solo resuelvan problemas, sino que también creen oportunidades sin límites.
          </p>
        </div>
      </div>
    </div>


    <div class="container py-5">
      <h2 class="text-center mb-4 fw-bold text-primary">¿Qué ofrecemos?</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body text-center">
              <i class="fas fa-laptop-code fa-3x text-primary mb-3"></i>
              <h5 class="card-title fw-bold">Desarrollo Web</h5>
              <p class="card-text">Creamos páginas y aplicaciones modernas y responsivas.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body text-center">
              <i class="fas fa-mobile-alt fa-3x text-primary mb-3"></i>
              <h5 class="card-title fw-bold">Apps Móviles</h5>
              <p class="card-text">Aplicaciones móviles que conectan con tus clientes.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body text-center">
              <i class="fas fa-chart-line fa-3x text-primary mb-3"></i>
              <h5 class="card-title fw-bold">Consultoría IT</h5>
              <p class="card-text">Optimiza tus procesos con tecnología avanzada.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  
    <div class="container py-5">
      <h2 class="text-center mb-4 fw-bold text-primary">Nuestro equipo</h2>
      <div class="row text-center">
        <div class="col-md-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Miembro del equipo"
            class="img-fluid rounded-circle mb-3"
          />
          <h5 class="fw-bold">Andres Cañon</h5>
          <p class="text-muted">Desarrollador Full-Stack</p>
        </div>
        <div class="col-md-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Miembro del equipo"
            class="img-fluid rounded-circle mb-3"
          />
          <h5 class="fw-bold">Karen Figueredo</h5>
          <p class="text-muted">Especialista en UI/UX</p>
        </div>
        <div class="col-md-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Miembro del equipo"
            class="img-fluid rounded-circle mb-3"
          />
          <h5 class="fw-bold">Miguel Achury</h5>
          <p class="text-muted">Analista de Sistemas</p>
        </div>
        <div class="col-md-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Miembro del equipo"
            class="img-fluid rounded-circle mb-3"
          />
          <h5 class="fw-bold">Julian Cañon</h5>
          <p class="text-muted">Desarrollador</p>
        </div>
      </div>
    </div>

  
    <div class="container py-5">
      <h2 class="text-center mb-4 fw-bold text-primary">Preguntas Frecuentes</h2>
      <div class="accordion" id="faqAccordion">
    
        <div class="accordion-item">
          <h2 class="accordion-header" id="faq1">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-expanded="true"
              aria-controls="collapse1"
            >
              ¿Cuánto tiempo tarda un proyecto?
            </button>
          </h2>
          <div
            id="collapse1"
            class="accordion-collapse collapse show"
            aria-labelledby="faq1"
            data-bs-parent="#faqAccordion"
          >
            <div class="accordion-body">
              Depende de la complejidad, pero la mayoría de los proyectos se completan entre 4 y 12 semanas.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="faq2">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2"
              aria-expanded="false"
              aria-controls="collapse2"
            >
              ¿Ofrecen soporte técnico?
            </button>
          </h2>
          <div
            id="collapse2"
            class="accordion-collapse collapse"
            aria-labelledby="faq2"
            data-bs-parent="#faqAccordion"
          >
            <div class="accordion-body">
              Sí, brindamos soporte técnico y mantenimiento para todos nuestros proyectos.
            </div>
          </div>
        </div>
      </div>
    </div>

 
    <div class="bg-light py-5">
      <div class="container text-center">
        <h3 class="mb-4 fw-bold">¿Listo para trabajar con nosotros?</h3>
        <a href="/contact" class="btn btn-primary btn-lg">
          Contáctanos
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style scoped>

.jumbotron h1 {
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8); /* Sombra negra suave */
  color: #fff;
  font-size: 3.5rem; /* Más grande */
}

.jumbotron p {
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7); /* Sombra más ligera */
  color: #f8f9fa;
  font-size: 1.2rem; /* Más legible */
}

.jumbotron .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Aumenta la opacidad a 0.6 */
  z-index: 1;
}


.jumbotron {
  background: url('https://www.zitelia.es/wp-content/uploads/2024/01/desarrollo-software-a-medida-scaled.jpg')
    no-repeat center center;
  background-size: cover;
  color: #fff;
  padding: 4rem 2rem;
  
}

h2 {
  font-weight: 700;
}

p {
  font-size: 1.1rem;
}

img {
  border-radius: 15px;
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}
</style>
