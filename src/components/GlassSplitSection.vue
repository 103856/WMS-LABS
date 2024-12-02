<template>
    <section class="glass-split-section">
      <div class="left">
        <h1 class="split-title">
          <span class="text-left">{{ ltitle }}</span>
        </h1>
      </div>
      <div class="right">
        <span class="text-left">{{ rtitle }}</span>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'GlassSplitSection',
    props: {
      ltitle: {
        type: String,
        required: true,
        default: 'Innovación que transforma',
      },
      rtitle: {
        type: String,
        required: true,
        default: 'Innovación que transforma',
      },
    },
  };
  </script>
  
  <style scoped>
  .glass-split-section {
    display: flex;
    height: 100vh;
    width: 100%;
    background: url('https://images.pexels.com/photos/3695354/pexels-photo-3695354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') no-repeat center center/cover;
    position: relative;
  }
  
  .left, .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  .left {
    backdrop-filter: blur(2px);
    background: rgba(255, 255, 255, 0.3);
    color: white;
    position: relative;
    z-index: 1;
  }
  
  .right {
    color: white;
  }
  
  .split-title {
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    line-height: 1.2;
    letter-spacing: 2px;
  }
  </style>
  