<template>
    <div class="card-section">
      <component
        v-for="(card, index) in cards"
        :is="getCardComponent(card.type)"
        :key="index"
        :icon="card.icon"
        :title="card.title"
        :description="card.description"
      />
    </div>
  </template>
  
  <script>
  import CardA from "./CardA.vue";
  import CardB from "./CardB.vue";
  
  export default {
    name: "CardSection",
    components: {
      CardA,
      CardB,
    },
    props: {
      cards: {
        type: Array,
        required: true,
        default: () => [],
        validator: (value) =>
          value.every(
            (card) =>
              typeof card.icon === "string" &&
              typeof card.title === "string" &&
              typeof card.description === "string" &&
              (typeof card.type === "string" && ["A", "B"].includes(card.type))
          ),
      },
    },
    methods: {
      getCardComponent(type) {
        switch (type) {
          case "A":
            return "CardA";
          case "B":
            return "CardB";
          default:
            return "CardA"; 
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .card-section {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    margin: 3.5rem;
  }
  </style>
  