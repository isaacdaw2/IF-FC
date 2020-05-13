<template>
  <div>
      <b-navbar toggleable="md" type="dark" variant="primary">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand :to="{name: 'home'}">
            <img src="/img/balon.png" width="30" alt="balon">
            IF-ormáticos FC</b-navbar-brand>

          <b-collapse id="nav-collapse" class="text-center" is-nav>
            <b-navbar-nav>
              <b-nav-item :to="{name: 'home'}">Noticias del club</b-nav-item>
              <b-nav-item :to="{name: 'socio'}">Inscribirse como socio</b-nav-item>
              <b-nav-item :to="{name: 'jugador'}">Inscribirse como jugador</b-nav-item>              
              <b-nav-item :to="{name: 'entrenador'}">Enviar solicitud de entrenador</b-nav-item>       
              <b-nav-item :to="{name: 'perfil'}" class="pr-5"><b-spinner type="grow" small variant="success"></b-spinner> Mi perfil</b-nav-item>       
              <b-nav-item href="/logout" class=""><font-awesome-icon icon="sign-out-alt" :style="{ color: '#CD5C5C' }" size="lg"/></b-nav-item>       
            </b-navbar-nav>
          </b-collapse>
      </b-navbar>

      <b-container>
        <router-view/>
      </b-container>   
  </div>
</template>