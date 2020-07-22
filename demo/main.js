import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import zmUi from '../src/index';

const app = createApp(App);
app.use(router);
app.use(zmUi);

app.mount('#app');
