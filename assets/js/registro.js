import '../css/app.scss';
import '../css/app.css';

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import Registro from './components/Registro.vue'

new Vue({
    el: "#registro",
    components: {Registro}
})