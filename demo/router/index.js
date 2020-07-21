import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../layout/index.vue';
import Form from '../views/form.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/form',
        component: Form,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
