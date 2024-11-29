<template>
  <div>
  <NavigationMenu />
  <div class="contact-container container py-5">
    <div class="steps row mb-5">
      <div class="col-md-4">
        <div class="step-box text-center p-3">
          <i class="fas fa-pencil-alt fa-3x mb-3"></i>
          <h5 class="step-title">1. Ingresa tus datos</h5>
          <p class="step-description">
            Proporciónanos tu información para poder analizar tus necesidades.
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="step-box text-center p-3">
          <i class="fas fa-chart-line fa-3x mb-3"></i>
          <h5 class="step-title">2. Estudiamos tu caso</h5>
          <p class="step-description">
            Analizamos tus requerimientos y diseñamos una solución personalizada.
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="step-box text-center p-3">
          <i class="fas fa-comments fa-3x mb-3"></i>
          <h5 class="step-title">3. Te contactamos</h5>
          <p class="step-description">
            Recibirás una respuesta oportuna con nuestra propuesta de solución.
          </p>
        </div>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-md-6">
        <h2 class="text-center mb-4">Contáctanos</h2>
        <form @submit.prevent="submitForm" class="shadow p-4 rounded">
          <div class="mb-3">
            <label for="name" class="form-label">Nombre completo</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="form.name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="form.email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Teléfono</label>
            <input
              type="tel"
              class="form-control"
              id="phone"
              v-model="form.phone"
              required
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Mensaje</label>
            <textarea
              class="form-control"
              id="message"
              rows="5"
              v-model="form.message"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-secondary w-100">
            <i class="fas fa-paper-plane me-2"></i> Enviar
          </button>
        </form>
      </div>

      <div class="col-md-6 text-center">
        <img
          src="https://timesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com/A_customer_care_executive_in_office_ef17d9bd97.webp"
          alt="Servicio al cliente"
          class="img-fluid rounded mb-4"
        />
        <h4 class="text-primary mb-3">¿Por qué contactarnos?</h4>
        <p class="contact-message">
          Brindamos soluciones rápidas y efectivas, diseñadas a la medida de
          tus necesidades. Nuestro equipo está comprometido con ofrecer un
          servicio excepcional. ¡Hablemos y descubramos cómo podemos ayudarte!
        </p>
        <div class="mt-4">
          <h5 class="text-dark">Nuestras Redes</h5>
          <div class="social-buttons d-flex justify-content-center mt-3 gap-3">
            <a href="#" class="btn-social btn-facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="btn-social btn-twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="btn-social btn-instagram">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import NavigationMenu from '@/components/NavigationMenu.vue';
export default {
  name: "Contact",
  components: {
    NavigationMenu,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert("Formulario enviado exitosamente.");
      console.log(this.form);
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a tu servidor.
    },
  },
};

</script>

<style scoped>
.contact-container {
  font-family: 'Poppins', sans-serif;
  background-color: #ffffff;
}

.step-box {
  border: 2px solid #00ff9d;
  border-radius: 10px;
  background-color: #f8f9fa;
  transition: transform 0.3s ease;
}
.step-box:hover {
  transform: scale(1.05);
  background-color: #e9ecef;
}

.step-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #00ff9d;
}

.step-description {
  font-size: 0.9rem;
  color: #6c757d;
}

.social-buttons .btn-social {
  font-size: 1.5rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, background-color 0.3s;
}
.btn-facebook {
  background-color: #3b5998;
  color: white;
}
.btn-twitter {
  background-color: #1da1f2;
  color: white;
}
.btn-instagram {
  background-color: #e1306c;
  color: white;
}
.btn-social:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}

.contact-message {
  font-size: 1.2rem;
  font-weight: 500;
  color: #343a40;
  line-height: 1.6;
}
</style>
