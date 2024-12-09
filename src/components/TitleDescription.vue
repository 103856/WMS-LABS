<template>
  <div v-if="title || description" :class="`title-description ${alignmentClass}`">
    <h2 v-if="title">{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "TitleDescription",
  props: {
    title: {
      type: String,
      required: false,
      default: null,
    },
    description: {
      type: String,
      required: false,
      default: null,
    },
    align: {
      type: String,
      required: false,
      default: 'center', 
      validator(value) {
        return ['left', 'center', 'right'].includes(value);
      },
    },
  },
  computed: {
    alignmentClass() {
      return `align-${this.align}`;
    },
  },
};
</script>

<style scoped>
.title-description {
  padding: 4rem 6rem;
}

.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}

h2 {
  font-size: 3.75rem;
  font-weight: 700;
}

p {
  font-size: 1.5rem;
  font-weight: 400;
}
</style>
