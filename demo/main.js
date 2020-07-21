import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import ZmContainer from '../packages/Container/index.vue';
import ZmHeader from '../packages/Header/index.vue';
import ZmMain from '../packages/Main/index.vue';
import ZmFooter from '../packages/Footer/index.vue';
import ZmAside from '../packages/Aside/index.vue';

import ZmScrollView from '../packages/scrollView/index.vue';
import { ZmMenu, ZmMenuItem, ZmSubmenu } from '../packages/Menu/index';

import { ZmForm, ZmFormItem } from '../packages/form';
import ZmInput from '../packages/Input/index.vue';
import ZmSwitch from '../packages/Switch/index.vue';
import ZmPagination from '../packages/Pagination/index.vue';

const app = createApp(App);
app.use(router);
app.component([ZmContainer.name], ZmContainer);
app.component([ZmHeader.name], ZmHeader);
app.component([ZmMain.name], ZmMain);
app.component([ZmFooter.name], ZmFooter);
app.component([ZmAside.name], ZmAside);
app.component([ZmScrollView.name], ZmScrollView);
app.component([ZmMenu.name], ZmMenu);
app.component([ZmMenuItem.name], ZmMenuItem);
app.component([ZmSubmenu.name], ZmSubmenu);
app.component([ZmForm.name], ZmForm);
app.component([ZmFormItem.name], ZmFormItem);
app.component([ZmInput.name], ZmInput);
app.component([ZmSwitch.name], ZmSwitch);
app.component([ZmPagination.name], ZmPagination);

app.mount('#app');
