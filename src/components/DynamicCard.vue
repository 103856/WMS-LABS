<template>
  <div
    class="card"
    :class="{ 'hover-card': isHovered, 'blur-card': isBlurred }"
    @mouseover="$emit('hover', index)"
    @mouseleave="$emit('hover', null)"
  >
    <img :src="image" :alt="name" />
    <div class="card-info">
      <h2>{{ name }}</h2>
      <p>{{ location }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DynamicCard",
  props: {
    image: String,
    name: String,
    location: String,
    index: Number,
    isHovered: Boolean,
    isBlurred: Boolean,
  },
};
</script>

<style scoped>
.card {
  width: 200px;
  height: 300px;
  transition: all 0.5s ease;
  transform: scale(1);
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-info {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Efecto hover: agrandar la tarjeta */
.hover-card {
  transform: scale(1.2);
  z-index: 10;
}

/* Aplicar efecto blur a las tarjetas que no están en hover */
.blur-card {
  filter: blur(4px);
  opacity: 0.6;
  transform: scale(0.9);
  z-index: 1;
}
</style>
