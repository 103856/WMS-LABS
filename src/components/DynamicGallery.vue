<template>
    <div class="gallery-container">
      <div class="card-container">
        <DynamicCard
          v-for="(card, index) in visibleCards"
          :key="index"
          :image="card.image"
          :name="card.name"
          :location="card.location"
          :position="getCardPosition(index)"
        />
      </div>
  
      <!-- Navigation Controls -->
      <div class="navigation">
        <button @click="prevSlide">Prev</button>
        <button @click="nextSlide">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import DynamicCard from "./DynamicCard.vue";
  
  export default {
    name: "DynamicGallery",
    components: { DynamicCard },
    data() {
      return {
        currentIndex: 0, // Índice actual de inicio
        cards: [
          { name: "Swagger", location: "Tech", image: "https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
          { name: "Dombay", location: "Karachay-Cherkessia", image: "path/to/dombay.jpg" },
          { name: "Teletskiy", location: "Altai Republic", image: "path/to/teletskiy.jpg" },
          { name: "Sheregesh", location: "Siberia", image: "path/to/sheregesh.jpg" },
          { name: "Big Wood", location: "Murmansk", image: "path/to/big_wood.jpg" },
          { name: "Elbrus", location: "Caucasus", image: "path/to/elbrus.jpg" },
          { name: "Sochi", location: "Black Sea", image: "path/to/sochi.jpg" },
        ],
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
    text-align: center;
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
  
  .navigation {
    margin-top: 20px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  