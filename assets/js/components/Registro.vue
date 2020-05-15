<template>
  <div>
    <b-container class="mt-5 mb-5 text-center">

      <b-card title="¡Rellena este formulario!" header-tag="nav">
        <template v-slot:header>
          <b-nav card-header tabs>
            <b-nav-item href="login">Iniciar sesión</b-nav-item>
            <b-nav-item active>Registrarme</b-nav-item>
          </b-nav>
        </template>

        

        <!-- Nombre -->
        <b-row class="mt-4">
          <b-col>
            <b-card-text>Nombre:</b-card-text>
          </b-col>
          <b-col>
            <b-form-input type="text" id="nombre" placeholder="Introduce aquí tu nombre" class="input-formulario" required autofocus=""></b-form-input>
          </b-col>
        </b-row>

        <!-- Apellidos -->
        <b-row class="mt-4">
          <b-col>
            <b-card-text>Apellidos:</b-card-text>
          </b-col>
          <b-col>
            <b-form-input type="text" id="apellidos" placeholder="Introduce aquí tus apellidos" class="input-formulario" required></b-form-input>
          </b-col>
        </b-row>

        <!-- email -->
        <b-row class="mt-4">
          <b-col>
            <b-card-text>Email:</b-card-text>
          </b-col>
          <b-col>
            <b-form-input type="email" id="emailRegistro" placeholder="Introduce aquí tu email" class="input-formulario" required></b-form-input>
          </b-col>
        </b-row>

        <!-- DNI -->
        <b-row class="mt-4">
          <b-col>
            <b-card-text>Dni:</b-card-text>
          </b-col>
          <b-col>
            <b-form-input type="text" id="dni" placeholder="Introduce aquí tu dni" class="input-formulario" required></b-form-input>
          </b-col>
        </b-row>

        <!-- Fecha de nacimiento -->
        <b-row class="mt-4">
          <b-col>
            <b-card-text>Fecha de nacimiento:</b-card-text>
          </b-col>
          <b-col>
            <b-form-input type="date" id="fechaNacimiento" placeholder="Introduce aquí tu fecha de nacimiento" class="input-formulario"></b-form-input>
          </b-col>
        </b-row>

        <hr><span class="text-success">Dirección</span>

        <!-- Calle -->
        <b-row class="mt-4">
          <b-col>
            <b-card-text>Calle:</b-card-text>
          </b-col>
          <b-col>
            <b-form-input type="text" id="calle" placeholder="Introduce aquí el nombre de tu calle" class="input-formulario" required></b-form-input>
          </b-col>
        </b-row>

        <!-- Localidad -->
        <b-row class="mt-4">
          <b-col>
            <b-card-text>Localidad:</b-card-text>
          </b-col>
          <b-col>
            <b-form-input type="text" id="localidad" placeholder="Introduce aquí la localidad" class="input-formulario" required></b-form-input>
          </b-col>
        </b-row>

        <!-- Provincia -->
        <b-row class="mt-4">
          <b-col>
            <b-card-text>Provincia:</b-card-text>
          </b-col>
          <b-col>
            <b-form-input type="text" id="provincia" placeholder="Introduce aquí la provincia" class="input-formulario" required></b-form-input>
          </b-col>
        </b-row>

        <!-- CP -->
        <b-row class="mt-4">
          <b-col>
            <b-card-text>CP:</b-card-text>
          </b-col>
          <b-col>
            <b-form-input type="text" id="cp" placeholder="Introduce aquí el código póstal" class="input-formulario" required></b-form-input>
          </b-col>
        </b-row>




        <hr>
        

        <!-- Contraseña -->
        <b-row class="mt-4">
          <b-col>
            <b-card-text>Contraseña:</b-card-text>
          </b-col>
          <b-col>
            <b-form-input type="password" id="pass" placeholder="Introduce una contraseña" class="input-formulario" required></b-form-input>
          </b-col>
        </b-row>

        <!-- Botón de registrar -->
        <b-row class="mt-4">
          <b-col>
            <b-button variant="outline-success" type="submit" id="registrarme" class="input-formulario">Registrarme</b-button>
          </b-col>        
        </b-row>     
      </b-card>
    </b-container>    
  </div>
</template>