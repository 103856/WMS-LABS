<template>
  <div class="card">
    <div class="card-header">
      <i :class="`bi bi-${icon}`" class="card-icon"></i>
      <h3 class="card-title">{{ title }}</h3>
    </div>
    <p class="card-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "CardB",
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
};
</script>

<style scoped>
.card {
  background-color: #ffffff;
  border: 2px solid #007bff;
  border-radius: 12px;
  padding: 20px;
  text-align: left;
  width: 300px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
}
.card-header {
  display: flex;
  align-items: center;
}
.card-icon {
  font-size: 30px;
  color: #007bff;
  margin-right: 10px;
}
.card-title {
  font-size: 1.25rem;
}
.card-description {
  font-size: 1rem;
  color: #333;
  margin-top: 10px;
}
</style>
