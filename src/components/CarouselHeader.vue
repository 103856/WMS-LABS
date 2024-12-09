<template>
    <transition name="fade" mode="out-in">
        <header class="hero" :style="getBackgroundStyle(currentSlide.image)">
            <div class="hero-layout" v-if="currentSlide" :key="currentSlideIndex">
                <div class="hero-content">
                    <h5>{{ currentSlide.span }}</h5>
                    <h1 v-html="currentSlide.title"></h1>
                    <p>{{ currentSlide.subtitle }}</p>

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
            </div>

            <div class="carousel-indicators">
                <span v-for="(slide, index) in slides" :key="index"
                    :class="['indicator', { active: currentSlideIndex === index }]" @click="goToSlide(index)"></span>
            </div>
        </header>
    </transition>
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
            default: 10000000,
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
        getBackgroundStyle(imagePath) {
            const isExternal = /^(https?:\/\/)/.test(imagePath);
            let resolvedPath = imagePath;

            if (!isExternal) {
                resolvedPath = new URL(`/src/assets/img/${imagePath}`, import.meta.url).href;
            }

            return {
                backgroundImage: `url(${resolvedPath})`,
            };
        },
    },
};
</script>



<style scoped>
.hero {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 10rem;
    color: white;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

/*Gradient*/
.hero::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, var(--color-dark-blue) 100%);
    z-index: 1;
}

.hero-layout {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}


.hero-content {
    flex: 1;
    padding: 20px;
    max-width: 600px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s ease-in-out;
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
        inset 3px 3px 6px rgba(172, 172, 172, 0.5),
        inset -1px -1px 4px rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
}

.hero-content {
    margin: 0auto;
    display: flex;
    flex-direction: column;
    padding: 0 3rem;
    max-width: 60%;
    z-index: 2;
    min-height: 300px;

    h1 {
        font-size: 4rem;
        font-weight: 800;
        line-height: 90%;
        margin-bottom: 20px;
    }

    h5 {

        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 15px;
    }

}


.cta-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    gap: 1.5rem;

    button {

        margin-right: 1.5rem;
        padding: 10px 35px;
    }

    .contact-button {
        background-color: transparent;

        background-color: rgba(255, 255, 255, 0.178);
        backdrop-filter: blur(5px);
        border: 1px solid var(--color-secondary-yellow);
        color: var(--color-secondary-yellow);
        margin-left: 1.5rem;
        padding: 10px 35px;

        i {
            color: var(--color-secondary-yellow);
        }

    }
}


.cta-content .contact-button:hover {
    background-color: var(--color-secondary-yellow);
    color: var(--color-dark-blue);
    margin-right: 1.5rem;
    transition: 0.2s;

    i {
        color: var(--color-dark-blue);
    }
}
</style>
