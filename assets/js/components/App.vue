<template>
  <div id="app">
      <b-navbar toggleable="md" type="dark" variant="primary">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand href="home">
            <img src="/img/balon.png" width="30" alt="Kitten">
            IF-ormáticos FC</b-navbar-brand>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="home">Noticias del club</b-nav-item>
              <b-nav-item href="socios">Inscribirse como socio</b-nav-item>
              <b-nav-item href="jugadores">Inscribirse como jugador</b-nav-item>              
              <b-nav-item href="entrenadores">Enviar solicitud de entrenador</b-nav-item>       
              <b-nav-item href="registro">Registro / Iniciar sesión</b-nav-item>       
            </b-navbar-nav>
          </b-collapse>
      </b-navbar>
  </div>
</template>