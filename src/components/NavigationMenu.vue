<template>
  <nav class="navbar navbar-expand-lg custom-navbar fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#hero">WMS Labs</a>
      <button class="navbar-toggler" 
      type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#hero">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contenido">Sobre Nosotros</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Producto">Producto</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#footer">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationMenu",
};
</script>
