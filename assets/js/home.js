import '../css/app.scss';
import '../css/app.css';

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import Home from './components/Home.vue'

new Vue({
    el: "#home",
    components: {Home}
})