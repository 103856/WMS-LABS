<template>
    <header class="hero">
        <transition name="fade" mode="out-in">
            <div class="hero-layout" v-if="currentSlide" :key="currentSlideIndex">
                <div class="hero-content">
                    <h5>{{ currentSlide.span }}</h5>
                    <h1 v-html="currentSlide.titulo"></h1>
                    <p>{{ currentSlide.subtitulo }}</p>

                    <div class="cta-content">
                        <button @click="$emit('scroll')">
                            Saber más <i class="bi bi-arrow-right-circle-fill"></i>
                        </button>
                        <button @click="$emit('scroll')" class="contact-button">
                            <router-link to="/ContactPage">
                                Contacto <i class="bi bi-arrow-right-circle-fill"></i>
                            </router-link>
                        </button>
                    </div>
                </div>

                <div class="hero-image">
                    <img :src="currentSlide.image" alt="Header Image" />
                </div>
            </div>
        </transition>

        <!-- Puntos de navegación -->
        <div class="carousel-indicators">
            <span v-for="(slide, index) in slides" :key="index"
                :class="['indicator', { active: currentSlideIndex === index }]" @click="goToSlide(index)"></span>
        </div>
    </header>
</template>

<script>
export default {
    name: "CarouselHeader",
    props: {
        slides: {
            type: Array,
            required: true,
            default: () => [],
        },
        interval: {
            type: Number,
            default: 5000, // Tiempo entre slides (en milisegundos)
        },
    },
    data() {
        return {
            currentSlideIndex: 0,
        };
    },
    computed: {
        currentSlide() {
            return this.slides[this.currentSlideIndex];
        },
    },
    mounted() {
        this.startSlideShow();
    },
    beforeDestroy() {
        clearInterval(this.slideInterval);
    },
    methods: {
        startSlideShow() {
            this.slideInterval = setInterval(() => {
                this.currentSlideIndex =
                    (this.currentSlideIndex + 1) % this.slides.length;
            }, this.interval);
        },
        goToSlide(index) {
            this.currentSlideIndex = index;
        },
    },
};
</script>

<style scoped>
.hero {
    position: relative;
    overflow: hidden;
    min-height: 100vh;
}

.hero-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-content {
    flex: 1;
    padding: 20px;
    max-width: 600px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.carousel-indicators {
    position: absolute;
    bottom: 20px;
    left: 35%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
}

.indicator {
    width: 10px;
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;
    border: 3px solid transparent;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5),
        -1px -1px 4px rgba(255, 255, 255, 0.5);
}

.indicator.active {
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5),
        -1px -1px 4px rgba(255, 255, 255, 0.5),
        inset 3px 3px 6px rgba(0, 0, 0, 0.5),
        inset -1px -1px 4px rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
}
</style>
