<template>
  <DefaultLayout>
    <TimelineSection :steps="steps" />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import TimelineSection from '@/components/TimelineSection.vue';

export default {
  name: 'HomePage',
  components: {
    DefaultLayout,
    TimelineSection,
  },
  data() {
    return {
      steps: [
        { icon: 'bi bi-gear-fill', title: 'Paso 1', description: 'Descripción del primer paso.' },
        { icon: 'bi bi-search', title: 'Paso 2', description: 'Descripción del segundo paso.' },
        { icon: 'bi bi-bar-chart-line', title: 'Paso 3', description: 'Descripción del tercer paso.' },
        { icon: 'bi bi-house-fill', title: 'Paso 4', description: 'Descripción del cuarto paso.' },
      ],
    };
  },
};
</script>
