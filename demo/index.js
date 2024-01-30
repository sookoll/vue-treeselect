import {createApp } from 'vue';

//import VueTreeSelect from '../dist/vue3-treeselect.common';
import '../dist/vue3-treeselect.css';
import VueTreeSelect from '../src/index.js';


import App from './demo-app.vue';

createApp(App)
    .component('vue-treeselect',VueTreeSelect)
    .mount('#app');