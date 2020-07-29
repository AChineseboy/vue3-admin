import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../layout/index.vue';
import Form from '../views/form.vue';
import testMd from '../../docs/test.md';
import test2 from '../../build/doc-loader/markdownitoutput.vue';

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
      {
        path: '/test2',
        component: test2,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
