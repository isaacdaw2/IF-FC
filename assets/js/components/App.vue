<template>
  <div>
      <b-navbar v-if="cargaEnProceso" sticky toggleable="md" type="dark" variant="primary" class="text-center d-flex justify-content-center align-items-center">
        <div>
          <b-spinner variant="white" label="Spinning"></b-spinner>
        </div>
      </b-navbar>

      <b-navbar v-if="cargaCompletada" sticky toggleable="md" type="dark" variant="primary">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand :to="{name: 'home'}">
            <img src="/img/balon.png" width="30" alt="balon">
            IF-ormáticos FC
          </b-navbar-brand>

          <b-collapse id="nav-collapse" class="text-center" is-nav>
            <b-navbar-nav>
              <b-nav-item :to="{name: 'home'}">Noticias del club</b-nav-item>
              <b-nav-item :to="{name: 'socio'}" v-show="mostrarSocio">Inscribirse como socio</b-nav-item>
              <b-nav-item :to="{name: 'jugador'}" v-show="mostrarJugador">Inscribirse como jugador</b-nav-item>              
              <b-nav-item :to="{name: 'entrenador'}" v-show="mostrarEntrenador">Enviar solicitud de entrenador</b-nav-item>       
              <b-nav-item :to="{name: 'perfil'}" class="pr-5"><b-spinner type="grow" small variant="success"></b-spinner> Mi perfil</b-nav-item>       
              <b-nav-item @click="eliminarCookies" href="/logout"><font-awesome-icon icon="sign-out-alt" :style="{ color: '#CD5C5C' }" size="lg"/></b-nav-item>       
            </b-navbar-nav>
          </b-collapse>
      </b-navbar>

      <!-- Cookies -->
      <section class="bg-info p-3 fixed-bottom" id="cookiesSection" >
          <h2>Este sitio web utiliza cookies, si permanece aquí damos por hecho que acepta su uso.</h2>
          <p>Puede leer más sobre el uso de cookies en política de cookies.</p>
          <div>
              <b-button variant="light" @click="aceptarCookies"><a href='#'>Aceptar cookies</a></b-button>
              <b-button variant="light"><router-link to="/politicaCookies">Politica de cookies</router-link></b-button>
          </div>
          <small>Pulsa aceptar para eliminar este mensaje</small>
      </section>

      <router-view/>
        <!-- Copyright -->
        <p class="text-center" v-if="relative" id="copyright1">&copy;2020 IF-ormáticos FC</p>
        <p class="text-center" v-if="absolute" id="copyright2">&copy;2020 IF-ormáticos FC</p>
  </div>
</template>

<script>
    import axios from "axios";

     export default {
        data: () => ({
            socio: [],
            mostrarSocio: true,
            mostrarJugador: true,
            mostrarEntrenador: true,
            cargaEnProceso: true,
            cargaCompletada: false,
            contador: 0,
            relative: false,
            absolute: false
        }),
        methods: {
            aceptarCookies() {
              document.cookie = "CookieAceptada = Bienvenid@ a IF-ormáticos FC, acabas de aceptar nuestras cookies";
              document.getElementById('cookiesSection').style.display = 'none';
              console.log(document.cookie);
            },
            eliminarCookies() {
              document.cookie = "CookieAceptada=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            }
        },
        mounted () {
          if (to.path === '/socios') {
            console.log('Estoy en socios');
          }
          
          if(document.cookie){
            document.getElementById('cookiesSection').style.display = 'none';
          } 

          axios.get('/datos-socios')
            .then(response => {
              this.contador++
              if(response.data.id){
                  this.socio = response.data,
                  this.mostrarSocio = false
              }   
              console.log("Socio: "+this.contador) 
              if(this.contador === 3){
                this.cargaCompletada = true
                this.cargaEnProceso = false
              }                                  
            })

          axios.get('/datos-jugadores')
              .then(response => {
                this.contador++
                if(response.data.id){
                    this.jugador = response.data,
                    this.mostrarJugador = false
                } 
                console.log("Jugador: "+this.contador) 
                if(this.contador === 3){
                  this.cargaCompletada = true
                  this.cargaEnProceso = false
                }                                
              })

          axios.get('/datos-entrenadores')
            .then(response => {
              this.contador++
              if(response.data.id){
                  this.entrenador = response.data,
                  this.mostrarEntrenador = false
              }   
              console.log("Entrenador: "+this.contador)  
              if(this.contador === 3){
                this.cargaCompletada = true
                this.cargaEnProceso = false
              }                                                                   
            })
        }
     }
</script>