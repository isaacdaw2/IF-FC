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
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faSignOutAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import App from './components/App.vue'
import Home from './components/Home.vue'
import Registro from './components/Registro.vue'
import Login from './components/Login.vue'
import Jugador from './components/Jugador.vue'
import Socio from './components/Socio.vue'
import Entrenador from './components/Entrenador.vue'
import Perfil from './components/Perfil.vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/registro', name: 'registro', component: Registro },
    { path: '/login', name: 'login', component: Login },
    { path: '/jugadores', name: 'jugador', component: Jugador },
    { path: '/socios', name: 'socio', component: Socio },
    { path: '/entrenadores', name: 'entrenador', component: Entrenador },
    { path: '/miperfil', name: 'perfil', component: Perfil }
]

const router = new VueRouter({
    routes // short for `routes: routes`
});

new Vue({
    el: "#app",
    components: {App, Home, Registro, Login, Jugador, Socio, Entrenador, Perfil},
    router
})