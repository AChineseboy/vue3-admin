import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import zmUi from '../src/index';
import demoBlock from './components/demoBlock.vue';

const app = createApp(App);
app.use(router);
app.use(zmUi);
app.component('demoBlock', demoBlock);

app.mount('#app');
