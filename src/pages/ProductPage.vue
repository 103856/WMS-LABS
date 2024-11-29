<template>
  
  <NavigationMenu />
  <div class="container my-5">
 
    <div class="row mb-4">
      <div class="col-12">
        <h2 class="section-title">Producto:</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 mb-4" v-for="(card, index) in cards" :key="index">
        <div class="card shadow-sm border-dark rounded-3 d-flex flex-row">
          <div class="card-img-container p-3">
            <img :src="card.image" class="card-img" :alt="card.title" />
          </div>
          <div class="card-body p-3">
            <h5 class="card-title fs-4">{{ card.title }}</h5>
            <p class="card-text fs-6">{{ card.text }}</p>
          </div>

        </div>
      </div>
    </div>

    <div class="image-with-text mb-4">
      <img
        src="https://st3.depositphotos.com/1000423/16469/i/450/depositphotos_164690778-stock-photo-businessman-draw-diagrams-mixed-media.jpg"
        alt="Imagen promocional"
        class="img-fluid rounded"
      />
      <div class="text-overlay">
        <h3 class="overlay-text">Impulsa <br> tu negocio</h3>
      </div>
    </div>

    <div class="row mt-5 mb-4">
      <div class="col-12">
        <h2 class="section-title">Planes:</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="card card-vertical shadow-sm border-dark rounded-3">
          <div class="card-body p-3 text-center">
            <h5 class="card-title fs-4">Plan Básico</h5>
            <p class="card-text fs-6">
              Este plan incluye acceso a funcionalidades básicas para startups y
              pequeñas empresas.
            </p>
            <p class="card-text price fs-5">$29.99/mes</p>
            <button class="btn btn-primary">Pagar</button>
          </div>
        </div>
      </div>

      <div class="col-md-6 mb-4">
        <div class="card card-vertical shadow-sm border-dark rounded-3">
          <div class="card-body p-3 text-center">
            <h5 class="card-title fs-4">Plan Empresarial</h5>
            <p class="card-text fs-6">
              Este plan incluye todas las herramientas avanzadas para grandes
              empresas, con soporte prioritario y personalización.
            </p>
            <p class="card-text price fs-5">$99.99/mes</p>
            <button class="btn btn-primary">Pagar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavigationMenu from '@/components/NavigationMenu.vue';
export default {
  name: "ProductPage",
  components: {
    NavigationMenu,
  },
  data() {
    return {
      cards: [
        {
          image: "https://cdn-icons-png.flaticon.com/512/1465/1465493.png",
          title: "Visión General del Producto",
          text: "Descubre cómo nuestras soluciones de software están diseñadas para generar un impacto escalable y rentable en tu negocio.",
        },
        {
          image:
            "https://static.vecteezy.com/system/resources/previews/014/601/639/non_2x/project-features-icon-free-vector.jpg",
          title: "Características y Beneficios",
          text: "Crece con tu negocio, conecta con tus sistemas existentes sin problemas, responde rápidamente incluso con grandes volúmenes de datos.",
        },
        {
          image:
            "https://img.freepik.com/vector-premium/estudio-caso-icono-vector-sobre-fondo-blanco-vector-stock_775815-276.jpg",
          title: "Casos de Uso",
          text: "Nuestros productos se aplican en diversos sectores como comercio electrónico, salud, y finanzas, ayudando a optimizar procesos y generar mayor rentabilidad.",
        },
        {
          image:
            "https://www.shutterstock.com/image-vector/online-pc-test-icon-outline-260nw-2256240255.jpg",
          title: "Demos o Pruebas",
          text: "Ofrecemos una demo de prueba para que puedan experimentar de primera mano nuestras capacidades.",
        },
        {
          image:
            "https://static.vecteezy.com/system/resources/previews/008/330/050/non_2x/integration-icon-style-free-vector.jpg",
          title: "Integraciones",
          text: "Nuestro producto se integra fácilmente con herramientas populares como Salesforce, Slack, y Google Analytics.",
        },
        {
          image:
            "https://i.pinimg.com/736x/73/c2/80/73c2801a0d74757af460b2e2643ae994.jpg",
          title: "Testimonios y Reseñas",
          text: "Contamos con reseñas de personas que revolucionaron su manera de trabajar.",
        },
      ],
    };
  },
};
</script>

<style scoped>


.card {
  background-color: #f7f7f7;
  border: 2px solid black;
  height: 210px; 
  display: flex;
  flex-direction: column; 
}
.card {
  flex: 1;
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

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}


.card-title {
  font-size: 1rem;
  font-weight: bold;
}
.section-title {
  font-family: 'Poppins', sans-serif;
}

.card-text {
  font-size: 0.9rem;
}

.card-vertical {
  height: 300px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.row .col-md-4 {
  display: flex;
  align-items: stretch; 
}


.section-title {
  background: linear-gradient(90deg, #007bff, #0056b3);
  color: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}

/* Precio */
.price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
}


.fs-4 {
  font-size: 1rem;
}

.fs-6 {
  font-size: 0.85rem;
}


.image-with-text {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
}

.image-with-text img {
  width: 98%;
  height: 400px;
  border-radius: 50px; 
}

.text-overlay {
  position: absolute;
  top: 1cm; 
  right: 6cm; 
  color: black; 
  font-size: 50px !important; 
  font-weight: bold !important; 
  font-family: 'Bebas Neue', sans-serif !important; 
  white-space: nowrap; 
  padding: 10px 20px; 
}


</style>
