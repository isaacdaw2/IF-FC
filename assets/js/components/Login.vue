<template>
    <div>
        <b-container class="mt-5 text-center">
            <b-card title="¡Bienvenid@ a IF-ORMATICOS FC!" header-tag="nav">
            <template v-slot:header>
                <b-nav card-header tabs>
                <b-nav-item active>Iniciar sesión</b-nav-item>
                <b-nav-item href="registro">Registrarme</b-nav-item>
                </b-nav>
            </template>

            <div>
              <b-alert id="alertas" variant="danger" show>Aquí van los errores</b-alert>
            </div>

            <!-- Usuario -->
            <b-row class="mt-4">
                <b-col>
                <b-card-text>Email:</b-card-text>
                </b-col>
                <b-col>
                <b-form-input type="email" name="email" id="emailLogin" class="form-control" placeholder="Introduce aquí tu email" required autofocus></b-form-input>
                </b-col>
            </b-row>

            <!-- Contraseña -->
            <b-row class="mt-4">
                <b-col>
                <b-card-text>Contraseña:</b-card-text>
                </b-col>
                <b-col>
                <b-form-input type="password" name="password" id="password" class="form-control" placeholder="Introduce aquí tu contraseña" required></b-form-input>                
                </b-col>
            </b-row>

            <!-- Botón de iniciar -->
            <b-row class="mt-4">
                <b-col>
                <b-button type="submit" id="acceder" variant="outline-success">Acceder</b-button>
                </b-col>        
            </b-row>     
            </b-card>
        </b-container>
    </div>
</template>