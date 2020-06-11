import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../layout/index.vue';
import HelloWord from '../views/HelloWord.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/helloword',
        component: HelloWord,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
