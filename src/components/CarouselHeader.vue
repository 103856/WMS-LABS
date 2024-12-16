<template>
    <transition name="fade" mode="out-in" @before-enter="handleBeforeEnter" @after-enter="handleAfterEnter">
        <header class="hero" :class="[
            { 'infinite-animation': currentSlideHasEntered },
            `theme-${currentSlide.theme || 'dark'}`
        ]" :style="getBackgroundStyle(currentSlide.image)" :key="currentSlideIndex">
            <div class="hero-layout">
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
                <div class="hero-image"></div>
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
            default: 500000,
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
            this.clearSlideInterval(); 
            this.slideInterval = setInterval(() => {
                this.currentSlideIndex =
                    (this.currentSlideIndex + 1) % this.slides.length;
            }, this.interval);
        },
        clearSlideInterval() {
            if (this.slideInterval) {
                clearInterval(this.slideInterval);
                this.slideInterval = null;
            }
        },
        goToSlide(index) {
            this.clearSlideInterval(); 
            this.currentSlideIndex = index; 
            this.startSlideShow(); 
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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 2rem;
}

.theme-light {
    color: #000;
    background-color: #f9f9f9;
}

.theme-light h1,
.theme-light h5,
.theme-light p {
    color: #333;
}

.theme-light .cta-content button {
    background-color: #333;
    color: #fff;
}

.theme-light .cta-content .contact-button {
    border: 1px solid #333;
    color: #333;
}

.theme-dark {
    color: white;
    background-color: #2b2b2b;
}

.theme-dark h1,
.theme-dark h5,
.theme-dark p {
    color: #f9f9f9;
}

.theme-dark .cta-content button {
    background-color: #444;
    color: #fff;
}

.theme-dark .cta-content .contact-button {
    border: 1px solid #fff;
    color: #fff;
}

/*Gradient*/
.hero::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15%;
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0) 0%,
            var(--color-dark-blue) 100%);
    z-index: 1;
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
    margin: auto;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.fade-enter {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.fade-leave {
    opacity: 1;
}

.fade-leave-to {
    opacity: 0;
}

.background-transition {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.background-transition-enter-active {
    opacity: 1;
}

.background-transition-leave-active {
    opacity: 0;
}

@keyframes slideInAnimation {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
}

.fade-enter-active {
    animation: slideInAnimation 2s ease-in-out;
}

.infinite-animation {
    animation: pulse 0.5s infinite;
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }
}

.hero-content {
    flex: 1;
    padding: 3rem 9rem;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 2;
}

.hero-content h1 {
    font-size: 84px;
    font-weight: 600;
    line-height: .9;
    margin-bottom: 20px;
}

.hero-content h5 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 15px;
}

.hero-content p {
    font-size: 18px;
    line-height: 1.375;
    margin-bottom: 30px;
}


.cta-content {
    display: flex;
    gap: 1.5rem;

    button {
        display: flex;
        gap: 1.5rem;
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
</style>