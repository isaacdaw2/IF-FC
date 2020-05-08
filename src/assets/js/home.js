import '../css/app.scss'
import '../css/app.css'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import Home from './components/Home.vue'

Vue.use(BootstrapVue);

new Vue({
    el: "#home",
    components: {Home}
})