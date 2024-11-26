<template>
  <nav class="navbar navbar-expand-lg custom-navbar bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#hero">WMS-LABS</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
            <a class="nav-link" href="#galeria">Galería</a>
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

<style>


  .custom-navbar {
    background: linear-gradient(45deg, #ff4081, #00bcd4);

}


/* Eliminar estilos previos que ya están cubiertos por Bootstrap */

.nav-link {
  font-weight: bold;
  font-size: 1.1rem;
}

/* Añadir un hover más estilizado */
.nav-link:hover {
  color: #aaa;
}

/* Para asegurar que el navbar se mantenga encima de otros elementos */
.navbar.fixed-top {
  z-index: 1050;
}
</style>
