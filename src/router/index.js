import { createRouter, createWebHistory } from 'vue-router';  
import HomeView from '../pages/HomePage.vue';  // Importa HomeView correctamente
import Producto from '../pages/ProductPage.vue'; 
import Contacto from '../pages/ContactPage.vue'; 

const routes = [
  {
    path: '/',  // Ruta principal
    name: 'HomePage',
    component: HomeView, 
  },
  {
    path: '/productPage',  
    name: 'ProductPage',
    component: Producto,  
  },
  {
    path: '/contactPage',  
    name: 'ContactPage',
    component: Contacto,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
