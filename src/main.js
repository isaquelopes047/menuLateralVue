import { createApp } from 'vue';
import App from './App.vue';
import router from './router/routes';
import icons from './assets/icons/fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add({ ...icons });

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(router)
    .mount('#app')
