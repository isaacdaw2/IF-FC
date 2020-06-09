<template>
<div>
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
              <b-nav-item :to="{name: 'home'}" >Noticias del club</b-nav-item>
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
  </div>

    <!-- Footer -->
    <footer class="page-footer font-small mdb-color pt-4"  id="footer">

      <!-- Footer Links -->
      <div class="container text-center text-md-left">

        <!-- Footer links -->
        <div class="row text-center text-md-left mt-3 pb-3">

          <!-- Grid column -->
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">IF-ormáticos FC <font-awesome-icon icon="futbol"/></h6>
            <p>Si te apasionan el fútbol y la informática este es tu club predilecto. Acompañanos en nuestros partidos y comparte tus conocimientos informáticos con nosotros</p>
          </div>
          <!-- Grid column -->

          <hr class="w-100 clearfix d-md-none">

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Herramientas</h6>
            <p>
              <a href="https://getbootstrap.com/">Bootstrap</a>
            </p>
            <p>
              <a href="https://vuejs.org/">Vue</a>
            </p>
            <p>
              <a href="https://symfony.com/">Symfony</a>
            </p>
            <p>
              <a href="https://bootstrap-vue.org/">Bootstrap + Vue</a>
            </p>
          </div>
          <!-- Grid column -->

          <hr class="w-100 clearfix d-md-none">

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Enlaces útiles</h6>
            <p>
              <a href="https://codepen.io/">Codepen</a>
            </p>
            <p>
              <a href="https://github.com/">Github</a>
            </p>
            <p>
              <a href="#!">Tienda</a>
            </p>
            <p>
              <a href="#!">Ayuda</a>
            </p>
          </div>

          <!-- Grid column -->
          <hr class="w-100 clearfix d-md-none">

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contacto <font-awesome-icon icon="envelope"/>  &nbsp; <font-awesome-icon icon="phone-square-alt"/></h6>
            <p>
              <i class="fas fa-home mr-3"></i> Madrid, 28700, ESP</p>
            <p>
              <i class="fas fa-envelope mr-3"></i> if-ormaticosfc@gmail.com</p>
            <p>
              <i class="fas fa-phone mr-3"></i> + 34 912 111 111 </p>
            <p>
              <i class="fas fa-print mr-3"></i> + 34 611 222 333 </p>
          </div>
          <!-- Grid column -->

        </div>
        <!-- Footer links -->

        <hr>

        <!-- Grid row -->
        <div class="row d-flex align-items-center">

          <!-- Grid column -->
          <div class="col-md-7 col-lg-8">

            <!--Copyright-->
            <p class="text-center text-muted text-md-left">© 2020 Copyright:
              <a href="#" class="text-muted">
                <strong>www.if-ormaticosfc.com</strong> 
              </a>
            </p>

          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-5 col-lg-4 ml-lg-0">

            <!-- Social buttons -->
            <div class="text-center text-md-right">
              <ul class="list-unstyled list-inline">
                <li class="list-inline-item">
                  <a class="btn-floating btn-sm rgba-white-slight mx-1">
                    <i><font-awesome-icon :icon="['fab', 'facebook']"/></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-floating btn-sm rgba-white-slight mx-1">
                    <i><font-awesome-icon :icon="['fab', 'twitter']"/></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-floating btn-sm rgba-white-slight mx-1">
                    <i><font-awesome-icon :icon="['fab', 'instagram']"/></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn-floating btn-sm rgba-white-slight mx-1">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>

          </div>
          <!-- Grid column -->

        </div>
        <!-- Grid row -->

      </div>
      <!-- Footer Links -->

    </footer>
    <!-- Footer -->
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
            contador: 0
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