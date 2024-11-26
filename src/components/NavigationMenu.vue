<template>
  <nav class="nav">
    <ul>
      <li><a href="#hero">Inicio</a></li>
      <li><a href="#contenido">Sobre Nosotros</a></li>
      <li><a href="#galeria">Galería</a></li>
      <li><a href="#footer">Contacto</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavigationMenu",
};
</script>

<style>
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
</style>
