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

    axios.get('/datos-jugadores')
        .then(response => {  
                                                           
            if(response.data.id){
                if(to.path === '/jugadores'){
                    next('/') 
                    console.log('Estoy en home porque ya estoy inscrito como jugador') 
                }  else {
                    console.log('Soy jugador pero me dirijo a otra página') 
                    next() 
                }                
            } else {
                next() 
                console.log('No soy jugador, desvio con éxito hacia la página elegida')                                                     
            }
        })
})

export default router;

new Vue({
    el: "#app",
    components: {App, Home, Jugador, Socio, Entrenador, Perfil, PoliticaCookies},
    router
})