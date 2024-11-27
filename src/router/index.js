import { createRouter, createWebHistory } from 'vue-router';  
import Header from '../components/Header.vue'; 
import Producto from '../components/Producto.vue'; 
import Contacto from '../components/Contacto.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Header, 
  },
  {
    path: '/Producto',  
    name: 'Producto',
    component: Producto,
  },
  {
    path: '/Contacto',  
    name: 'Contacto',
    component: Contacto,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
