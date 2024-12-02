<template>
  <div>
    <DefaultLayout>
      <div class="about-us">

        <SecondaryHeaderSection title="Acerca de Nosotros" />

        <div class="container py-5 bg-light">
          <div class="row align-items-start">
            <div class="col-md-6">
              <img src="https://img.freepik.com/fotos-premium/desarrolladores-software-colaboracion_1275912-41582.jpg"
                alt="Equipo trabajando" class="img-fluid rounded shadow border" />
            </div>
            <div class="col-md-6">
              <h2 class="mb-3 fw-bold">¿Quiénes somos?</h2>
              <p>
                Somos una empresa especializada en desarrollo de software con años de experiencia. Nuestro equipo está
                compuesto por profesionales altamente capacitados que utilizan las mejores tecnologías para brindar
                soluciones eficientes.
              </p>
              <h2 class="mt-4 mb-3 fw-bold">Nuestra misión</h2>
              <p>
                Ayudamos a empresas a mejorar su rendimiento a través de soluciones
                tecnológicas innovadoras. Nos especializamos en desarrollo ágil, diseño
                de software y aplicaciones adaptadas a tus necesidades.
              </p>
            </div>
          </div>
        </div>

        <div class="container py-5">
          <h2 class="text-center mb-4 fw-bold ">¿Qué ofrecemos?</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="card shadow-sm">
                <div class="card-body text-center">
                  <i class="fas fa-laptop-code fa-3x  mb-3"></i>
                  <h5 class="card-title fw-bold">Desarrollo Web</h5>
                  <p class="card-text">Creamos páginas y aplicaciones modernas y responsivas.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card shadow-sm">
                <div class="card-body text-center">
                  <i class="fas fa-mobile-alt fa-3x  mb-3"></i>
                  <h5 class="card-title fw-bold">Apps Móviles</h5>
                  <p class="card-text">Aplicaciones móviles que conectan con tus clientes.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card shadow-sm">
                <div class="card-body text-center">
                  <i class="fas fa-chart-line fa-3x  mb-3"></i>
                  <h5 class="card-title fw-bold">Consultoría IT</h5>
                  <p class="card-text">Optimiza tus procesos con tecnología avanzada.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="container py-5">
          <h2 class="text-center mb-4 fw-bold ">Preguntas Frecuentes</h2>
          <div class="accordion" id="faqAccordion">

            <div class="accordion-item">
              <h2 class="accordion-header" id="faq1">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                  ¿Cuánto tiempo tarda un proyecto?
                </button>
              </h2>
              <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="faq1"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Depende de la complejidad, pero la mayoría de los proyectos se completan entre 4 y 12 semanas.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="faq2">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  ¿Ofrecen soporte técnico?
                </button>
              </h2>
              <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="faq2"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Sí, brindamos soporte técnico y mantenimiento para todos nuestros proyectos.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="faq3">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  ¿Qué tecnología utilizan?
                </button>
              </h2>
              <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="faq3"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Trabajamos con tecnologías como Vue.js, Node.js, PHP, Python, y muchas más según las necesidades del
                  cliente.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="faq4">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  ¿Pueden trabajar con empresas internacionales?
                </button>
              </h2>
              <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="faq4"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Sí, tenemos experiencia trabajando con clientes en diferentes partes del mundo.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="faq5">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  ¿Cómo puedo solicitar un presupuesto?
                </button>
              </h2>
              <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="faq5"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Solo necesitas llenar el formulario en nuestra página de contacto o enviarnos un correo con los
                  detalles
                  de tu proyecto.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="faq6">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                  ¿Qué métodos de pago aceptan?
                </button>
              </h2>
              <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="faq6"
                data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Aceptamos transferencias bancarias, tarjetas de crédito y pagos a través de plataformas como PayPal.
                </div>
              </div>
            </div>

          </div>
        </div>


        <div class="bg-light py-5">
          <div class="container text-center">
            <h3 class="mb-4 fw-bold">¿Listo para trabajar con nosotros?</h3>
            <a href="/ContactPage" class="btn btn-primary btn-lg">
              Contáctanos
            </a>
          </div>
        </div>

      </div>
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import SecondaryHeaderSection from '@/components/SecondaryHeaderSection.vue';

export default {
  name: "AboutUs",
  components: {
    DefaultLayout,
    SecondaryHeaderSection,
  },
};
</script>

<style scoped>
h2 {
  color: var(--color-secondary-yellow);
}

.card:hover {
  transform: scale(1.05);
}
</style>
