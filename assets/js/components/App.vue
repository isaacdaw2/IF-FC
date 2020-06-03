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
              <b-nav-item href="/logout" class=""><font-awesome-icon icon="sign-out-alt" :style="{ color: '#CD5C5C' }" size="lg"/></b-nav-item>       
            </b-navbar-nav>
          </b-collapse>
      </b-navbar>

      <router-view/>
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
        mounted () {
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