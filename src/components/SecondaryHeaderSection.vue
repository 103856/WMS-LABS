<template>
  <div class="secondary-header-section text-center">
    <h1 class="display-4 fw-bold">{{ title }}</h1>
    <p class="lead">Desarrollamos software a medida para hacer crecer tu negocio.</p>
  </div>
</template>

<script>
export default {
  name: "SecondaryHeaderSection",
  props: {
    title: {
      type: String,
      default: "WMS-LABS", // Título predeterminado
    },
  },
};
</script>

<style scoped>
.secondary-header-section {
  background: linear-gradient(
    0deg,
    var(--color-dark-blue) 0%,
    var(--color-secondary-dark-blue) 50%,
    var(--color-gray-blue) 100%
  );
  color: #fff;
  padding: 6rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.secondary-header-section h1 {
  font-size: 3.5rem;
}

.secondary-header-section p {
  color: #f8f9fa;
  font-size: 1.2rem;
}
</style>
