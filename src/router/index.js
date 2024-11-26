import { createRouter, createWebHistory } from 'vue-router';  // Importación correcta de vue-router
import Header from '../components/Header.vue'; 
import Producto from '../components/Producto.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Header, 
  },
  {
    path: '/Producto',  // Ruta para el componente Producto
    name: 'Producto',
    component: Producto,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
