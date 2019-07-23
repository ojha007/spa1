import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import routes from './Routes/index';
import navbar from './layouts/navbar';
import VueI18n from 'vue-i18n'
import {il8n} from './lang/index';



require('./bootstrap');
window.Vue = require('vue');

Vue.use(Vuetify);
Vue.use(VueI18n);


const app = new Vue({
    el: '#app',
    il8n,
    routes,
    components: {
        navbar
    },



});
