import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/styles.css'
import { Icon } from '@iconify/vue';  

import router from './router';

const app = createApp(App);

app.component('Icon', Icon);

app.use(router).mount('#app');
