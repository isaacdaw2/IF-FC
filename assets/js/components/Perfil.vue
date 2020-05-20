<template>
    <div class="mt-5 text-center">
        <b-container>
            <b-button variant="info" disabled v-if="!usuario.fechaNacimiento">
                <b-spinner small type="grow"></b-spinner>
                Cargando...
            </b-button>
            <b-card
                header="Mi perfil"
                header-text-variant="white"
                header-tag="header"
                header-bg-variant="info"
                style="max-width: 40rem;"
                v-if="usuario.fechaNacimiento"
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
                        <b-form-input v-model="usuario.cp"></b-form-input>
                        <b-button @click="editar">Editar</b-button>
                    </b-col>
                </b-row>
            </b-card>
        </b-container>
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
        },
        methods: {
            editar(){
                var ruta = '/editar-usuario'
                $.ajax({
                    type: 'POST',
                    url: ruta,
                    data: ({pago: tipoPago}),
                    async: true,
                    dataType: 'json',
                    success: function (data) {
                        console.log(data)
                    }
                })
            }
        }
    }
</script>