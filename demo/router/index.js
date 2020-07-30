import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../layout/index.vue';
import Form from '../views/form.vue';
import testMd from '../../docs/test.md';

console.log(testMd, Form);
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/form',
        component: Form,
      },
      {
        path: '/testMd',
        component: testMd,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
