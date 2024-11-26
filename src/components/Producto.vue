<template>
  <div class="container my-5">
    <div class="row">
      <!-- Card 1 -->
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm border-dark rounded-3 d-flex flex-row">
          <!-- Usar flex-row para disposición horizontal -->
          <div class="card-img-container p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1465/1465493.png"
              class="card-img"
              alt="Producto 1"
            />
            <!-- Espacio pequeño para el icono o imagen -->
          </div>
          <div class="card-body p-3">
            <h5 class="card-title fs-4">Visión General del Producto</h5>
            <p class="card-text fs-6">
              Descubre cómo nuestras soluciones de software están diseñadas para
              generar un impacto escalable y rentable en tu negocio
            </p>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm border-dark rounded-3 d-flex flex-row">
          <div class="card-img-container p-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/014/601/639/non_2x/project-features-icon-free-vector.jpg"
              class="card-img"
              alt="Producto 2"
            />
          </div>
          <div class="card-body p-3">
            <h5 class="card-title fs-4">Características y Beneficios</h5>
            <p class="card-text fs-6">
            Crece con tu negocio, Conecta con tus sistemas existentes sin problemas,
               Responde rápidamente incluso con grandes volúmenes de
              datos.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm border-dark rounded-3 d-flex flex-row">
          <div class="card-img-container p-3">
            <img
              src="https://img.freepik.com/vector-premium/estudio-caso-icono-vector-sobre-fondo-blanco-vector-stock_775815-276.jpg"
              class="card-img"
              alt="Producto 3"
            />
          </div>
          <div class="card-body p-3">
            <h5 class="card-title fs-4">Casos de Uso</h5>
            <p class="card-text fs-6">Nuestros productos se aplican en diversos sectores como comercio electrónico, salud, y finanzas, ayudando a optimizar procesos y generar mayor rentabilidad.</p>
          </div>
        </div>
      </div>

      <!-- Añade las demás Cards de manera similar -->
      <!-- Card 3 -->
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm border-dark rounded-3 d-flex flex-row">
          <div class="card-img-container p-3">
            <img
              src="https://www.shutterstock.com/image-vector/online-pc-test-icon-outline-260nw-2256240255.jpg"
              class="card-img"
              alt="Producto 3"
            />
          </div>
          <div class="card-body p-3">
            <h5 class="card-title fs-4">Demos o Pruebas</h5>
            <p class="card-text fs-6">Ofrecemos una demo de prueba para que puedan experimentar de primera mano nuestras capacidades..</p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm border-dark rounded-3 d-flex flex-row">
          <div class="card-img-container p-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/330/050/non_2x/integration-icon-style-free-vector.jpg"
              class="card-img"
              alt="Producto 3"
            />
          </div>
          <div class="card-body p-3">
            <h5 class="card-title fs-4">Integraciones</h5>
            <p class="card-text fs-6">Nuestro producto se integra fácilmente con herramientas populares como Salesforce, Slack, y Google Analytics.</p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm border-dark rounded-3 d-flex flex-row">
          <div class="card-img-container p-3">
            <img
              src="https://i.pinimg.com/736x/73/c2/80/73c2801a0d74757af460b2e2643ae994.jpg"
              class="card-img"
              alt="Producto 3"
            />
          </div>
          <div class="card-body p-3">
            <h5 class="card-title fs-4">Testimonios y Reseñas</h5>
            <p class="card-text fs-6">Contamos con reseñas de Personas que revolucionaron su manera de trabajar. </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Producto",
};
</script>

<style scoped>



    .card {
  background-color: #f7f7f7;
  border: 2px solid black;
  width: 100%;
  display: flex; 
  flex-direction: column; 
  height: 100%;
}

.card-body {
  text-align: left; 
  padding: 10px; 
}

.card-img-container {
  flex: 0 0 80px; 
}

.card-img {
  width: 100%; 
  height: 60px;
  object-fit: cover;
  border-radius: 50%; 
}

.card-title {
  font-size: 1rem;
  font-weight: bold;
}

.card-text {
  font-size: 0.9rem;
  color: #555;
}

.fs-4 {
  font-size: 1rem; /* Título más pequeño */
}

.fs-6 {
  font-size: 0.85rem; /* Texto más pequeño */
}

.card-body p {
  margin-bottom: 0;
}
</style>
