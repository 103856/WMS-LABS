<template>
    <div
      ref="container"
      class="cursor-container"
      @mousemove="handleMouseMove"
    >
      <slot></slot>
  
      <div
        ref="circle"
        :style="circleStyle"
        class="cursor-circle"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mouseX: 0,
        mouseY: 0,
        bgColor: "rgba(0, 0, 0, 0.3)", 
      };
    },
    computed: {
      circleStyle() {
        return {
          top: `${this.mouseY}px`,
          left: `${this.mouseX}px`,
          backgroundColor: this.bgColor,
        };
      },
    },
    methods: {
      handleMouseMove(event) {
        const rect = this.$refs.container.getBoundingClientRect();
        this.mouseX = event.clientX - rect.left;
        this.mouseY = event.clientY - rect.top;
  
        const element = document.elementFromPoint(event.clientX, event.clientY);
        const color =
          window.getComputedStyle(element).backgroundColor ||
          window.getComputedStyle(element).color;
  
        this.bgColor = color || "rgba(0, 0, 0, 0.3)";
      },
    },
  };
  </script>
  
  <style scoped>
  .cursor-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: none;
    
  }
  
  .cursor-circle {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    pointer-events: none; 
    transform: translate(-50%, -50%);
    z-index: 9999;
    mix-blend-mode: difference; 
    transition: background-color 0.2s ease, transform 0.05s ease;
  }
  </style>
  