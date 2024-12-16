<template>
  <div class="gallery-container">
    <div class="card-container">
      <transition-group name="card-transition" tag="div" class="card-container">
        <DynamicCard v-for="(card, index) in visibleCards" :key="card.name" :image="card.image" :name="card.name"
          :location="card.location" :position="getCardPosition(index)" />
      </transition-group>
    </div>

    <div class="description">
      <p>{{ currentDescription }}</p>
    </div>

    <!-- Navigation Controls -->
    <div class="navigation">
      <button @click="prevSlide">
        <Icon icon="solar:arrow-left-broken" width="40" height="40" />
      </button>
      <button @click="nextSlide">
        <Icon icon="solar:arrow-right-broken" width="40" height="40" />
      </button>
    </div>
  </div>
</template>

<script>
import DynamicCard from "./DynamicCard.vue";
import { Icon } from '@iconify/vue';

export default {
  name: "DynamicGallery",
  components: { DynamicCard },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0, 
    };
  },
  computed: {
    visibleCards() {
      const start = this.currentIndex % this.cards.length;
      return [
        ...this.cards.slice(start, start + 5),
        ...this.cards.slice(0, Math.max(0, start + 5 - this.cards.length)),
      ];
    },
    currentDescription() {
      return this.cards[this.currentIndex].description; 
    },
  },
  methods: {
    getCardPosition(index) {
      const middleIndex = Math.floor(this.visibleCards.length / 2);
      return index - middleIndex;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    },
  },
};
</script>

<style scoped>
.gallery-container {
  width: 100%;
  position: relative;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 75vh;
  overflow: hidden;
}

.description {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.navigation {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  pointer-events: none;
}

button {
  background: none;
  border: none;
  pointer-events: all;
  cursor: pointer;
  padding: 0;
  margin: 0;
}

button:hover {
  transform: scale(1.2);
}

button:focus {
  outline: none;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 75vh;
  overflow: hidden;
}

.card-transition-enter-active,
.card-transition-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.card-transition-enter-from,
.card-transition-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.card-transition-move {
  transition: transform 0.6s ease;
}
</style>