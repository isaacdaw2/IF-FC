/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/app.scss';
import '../css/app.css';


import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import App from './components/App.vue'
import Home from './components/Home.vue'

new Vue({
    el: "#app",
    components: {App}
})

new Vue({
    el: "#home",
    components: {Home}
})