<template>
    <div>
         <b-card
                header="Mi perfil"
                header-text-variant="white"
                header-tag="header"
                header-bg-variant="info"
                style="max-width: 30rem;"
                class="mt-5 text-center justify-content-center"
            >
                <h3>{{ usuario.nombre }} {{ usuario.apellidos }}</h3>
                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Email:</strong>
                    </b-col>
                    <b-col>
                        {{ usuario.email }}
                    </b-col>
                </b-row>

                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Dni:</strong>
                    </b-col>
                    <b-col>
                        {{ usuario.dni }}
                    </b-col>
                </b-row>

                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Fecha de nacimiento:</strong>
                    </b-col>
                    <b-col>
                        {{ usuario.fechaNacimiento.date.substring(0,10)}}
                    </b-col>
                </b-row>
                
                <hr><span class="text-info">Dirección</span>

                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Calle:</strong>
                    </b-col>
                    <b-col>
                        {{ usuario.calle }}
                    </b-col>
                </b-row>

                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Localidad:</strong>
                    </b-col>
                    <b-col>
                        {{ usuario.localidad }}
                    </b-col>
                </b-row>

                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Provincia:</strong>
                    </b-col>
                    <b-col>
                        {{ usuario.provincia }}
                    </b-col>
                </b-row>

                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Código postal:</strong>
                    </b-col>
                    <b-col>
                        {{ usuario.cp }}
                    </b-col>
                </b-row>
            </b-card>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data: () => ({
            usuario: []
        }),
        mounted () {
            axios
                .get('/misdatos')
                .then(response => (
                    this.usuario = response.data
                ))
        }
    }
</script>