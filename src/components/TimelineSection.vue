<template>
    <section class="timeline-section">
      <div class="timeline">
        <div v-for="(step, index) in steps" :key="index" class="timeline-item">
          <div class="circle">{{ index + 1 }}</div>
          <div class="content">
            <div class="icon"><i :class="step.icon"></i></div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TimelineSection',
    props: {
      steps: {
        type: Array,
        required: true,
        default: () => [
          {
            icon: 'bi bi-gear-fill',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            icon: 'bi bi-search',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            icon: 'bi bi-bar-chart-line',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            icon: 'bi bi-house-fill',
            title: 'Lorem Ipsum',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
        ],
      },
    },
  };
  </script>
  
  <style scoped>
  .timeline-section {
    background: url('https://source.unsplash.com/1600x900/?technology') no-repeat center center/cover;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .timeline {
    width: 80%;
    max-width: 1200px;
    position: relative;
    padding: 40px 20px;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(-50%);
  }
  
  .timeline-item {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
    padding: 20px;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
  
  .timeline-item .circle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    background-color: #007bff;
    border-radius: 50%;
    color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  
  .timeline-item .content {
    display: flex;
    align-items: center;
    margin-left: 80px;
  }
  
  .timeline-item .icon {
    font-size: 2.5rem;
    margin-right: 20px;
    color: white;
  }
  
  .timeline-item h3 {
    font-size: 1.5rem;
    color: white;
    margin: 0 0 10px;
  }
  
  .timeline-item p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
  }
  </style>
  