<template>
  <div class="card" :class="`position-${position}`">
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
    image: { type: String, required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    position: Number, 
  },
};
</script>

<style scoped>
.card {
  margin: 3%;
  width: 200px;
  height: 300px;
  position: absolute;
  transition: transform 0.6s ease, opacity 0.6s ease;
  overflow: hidden;
  box-shadow: 0px 10px 10px rgb(131, 131, 131);

}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.position-0 {
  transform: scale(1.2) translateX(0px) translateZ(50px);
  z-index: 5;
}

.position--1 {
  transform: scale(1) translateX(-15rem) translateZ(-10px);
  z-index: 4;
}

.position-1 {
  transform: scale(1) translateX(15rem) translateZ(-10px);
  z-index: 4;
}

.position--2 {
  transform: scale(0.8) translateX(-34rem) translateZ(-20px);
  z-index: 3;
}

.position-2 {
  transform: scale(0.8) translateX(34rem) translateZ(-20px);
  z-index: 3;
}
</style>
