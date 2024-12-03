<template>
    <div class="card-container">
        <DynamicCard v-for="(card, index) in cards" :key="index" :index="index" :image="card.image" :name="card.name"
            :location="card.location" :isHovered="index === hoveredIndex"
            :isBlurred="hoveredIndex !== null && index !== hoveredIndex" @hover="hoveredIndex = $event" />
    </div>
</template>

<script>
import DynamicCard from "./DynamicCard.vue";

export default {
    name: "DynamicGallery",
    components: {
        DynamicCard
    },
    data() {
        return {
            hoveredIndex: null,
            cards: [
                {
                    name: "Rosa Khutor",
                    location: "Krasnodar",
                    image: "path/to/rosa_khutor.jpg",
                },
                {
                    name: "Dombay",
                    location: "Karachay-Cherkessia",
                    image: "path/to/dombay.jpg",
                },
                {
                    name: "Teletskiy",
                    location: "Altai Republic",
                    image: "path/to/teletskiy.jpg",
                },
                {
                    name: "Sheregesh",
                    location: "Siberia",
                    image: "path/to/sheregesh.jpg",
                },
                {
                    name: "Big Wood",
                    location: "Murmansk",
                    image: "path/to/big_wood.jpg",
                },
            ],
        };
    },
};
</script>

<style scoped>
.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
    gap: 20px;
}
</style>