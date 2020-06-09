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
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faUserSecret, faSignOutAlt, faFutbol, faHeart, faCoffee, faEnvelope, faPhoneSquareAlt, faFacebook, faTwitter, faInstagram)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import App from './components/App.vue'
import Home from './components/Home.vue'
import Jugador from './components/Jugador.vue'
import Socio from './components/Socio.vue'
import Entrenador from './components/Entrenador.vue'
import Perfil from './components/Perfil.vue'
import PoliticaCookies from './components/PoliticaCookies.vue'
import axios from "axios";


Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/jugadores', name: 'jugador', component: Jugador },
    { path: '/socios', name: 'socio', component: Socio },
    { path: '/entrenadores', name: 'entrenador', component: Entrenador },
    { path: '/miperfil', name: 'perfil', component: Perfil },
    { path: '/politicaCookies', name: 'politicaCookies', component: PoliticaCookies }
]

const router = new VueRouter({
    routes // short for `routes: routes`
});


router.beforeEach((to, from, next) => {

    axios.get('/comprobacion')
        .then(response => {  
            if(response.data.idJugador && response.data.idSocio && response.data.idEntrenador) {
                
                if(to.path === '/jugadores' || to.path === '/socios' || to.path === '/entrenadores') {
                    next('/') 
                    console.log('Estoy en home, porque soy Jugador + Socio + Entrenador')
                } else {
                    next() 
                    console.log('Soy Jugador + Socio + Entrenador, pero me dirijo a otra página')
                }

            } else if (response.data.idJugador && response.data.idSocio) {
                
                if(to.path === '/jugadores' || to.path === '/socios') {
                    next('/') 
                    console.log('Estoy en home, porque soy Jugador + Socio')
                } else {
                    next() 
                    console.log('Soy Jugador + Socio, pero me dirijo a otra página')
                }

            } else if (response.data.idJugador && response.data.idEntrenador) {

                if(to.path === '/jugadores' || to.path === '/entrenadores') {
                    next('/') 
                    console.log('Estoy en home, porque soy Jugador + Entrenador')
                } else {
                    next() 
                    console.log('Soy Jugador + Entrenador, pero me dirijo a otra página')
                }

            } else if (response.data.idSocio && response.data.idEntrenador) {

                if(to.path === '/socios' || to.path === '/entrenadores') {
                    next('/') 
                    console.log('Estoy en home, porque soy Socio + Entrenador')
                } else {
                    next() 
                    console.log('Soy Socio + Entrenador, pero me dirijo a otra página')
                }

            } else if (response.data.idJugador) {

                if(to.path === '/jugadores') {
                    next('/') 
                    console.log('Estoy en home, porque soy Jugador')
                } else {
                    next() 
                    console.log('Soy Jugador, pero me dirijo a otra página')
                }

            } else if (response.data.idSocio) {

                if(to.path === '/socios') {
                    next('/') 
                    console.log('Estoy en home, porque soy Socio')
                } else {
                    next() 
                    console.log('Soy Socio, pero me dirijo a otra página')
                }

            } else if (response.data.idEntrenador) {

                if(to.path === '/entrenadores') {
                    next('/') 
                    console.log('Estoy en home, porque soy Entrenador')
                } else {
                    next() 
                    console.log('Soy Entrenador, pero me dirijo a otra página')
                }
            } else {
                next() 
                console.log('Estoy en home, porque NO soy Jugador ni Socio ni Entrenador')
            }
        })  
})



export default router;

new Vue({
    el: "#app",
    components: {App, Home, Jugador, Socio, Entrenador, Perfil, PoliticaCookies},
    router
})