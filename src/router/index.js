import { createRouter, createWebHistory } from 'vue-router';  
import HomeView from '../pages/HomeView.vue';  // Importa HomeView correctamente
import Producto from '../pages/Producto.vue'; 
import Contacto from '../pages/Contacto.vue'; 

const routes = [
  {
    path: '/',  // Ruta principal
    name: 'Home',
    component: HomeView, 
  },
  {
    path: '/producto',  
    name: 'Producto',
    component: Producto,  
  },
  {
    path: '/contacto',  
    name: 'Contacto',
    component: Contacto,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
