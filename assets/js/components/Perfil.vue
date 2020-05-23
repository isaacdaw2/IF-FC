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
                <h3 v-if="!editar">{{ usuario.nombre }} {{ usuario.apellidos }}</h3>

                <b-row class="mb-2" v-if="editar">
                    <b-col>
                        <strong class="text-dark">Nombre:</strong>
                    </b-col>
                    <b-col>
                        <b-form-input name="usuario.nombre" id="usuario.nombre" v-model="usuario.nombre"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="mb-2" v-if="editar">
                    <b-col>
                        <strong class="text-dark">Apellidos:</strong>
                    </b-col>
                    <b-col>
                        <b-form-input v-model="usuario.apellidos"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Email:</strong>
                    </b-col>
                    <b-col v-if="!editar">
                        {{ usuario.email }}
                    </b-col>
                     <b-col v-if="editar">
                        <b-form-input v-model="usuario.email"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="mb-2" v-if="editar">
                    <b-col>
                        <strong class="text-dark">Contraseña:</strong>
                    </b-col>
                     <b-col>
                        <b-form-input type="password" v-model="usuario.password"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="mb-2" v-if="editar">
                    <b-col>
                        <strong class="text-dark">Confirmar contraseña:</strong>
                    </b-col>
                     <b-col>
                        <b-form-input type="password" v-model="confirmarPass"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Dni:</strong>
                    </b-col>
                    <b-col v-if="!editar">
                        {{ usuario.dni }}
                    </b-col>
                     <b-col v-if="editar">
                        <b-form-input v-model="usuario.dni"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Fecha de nacimiento:</strong>
                    </b-col>
                    <b-col v-if="!editar">
                        {{ usuario.fechaNacimiento.date.substring(0,10)}}
                    </b-col>
                     <b-col v-if="editar">
                        <b-form-input type="date" v-model="fecha"></b-form-input>
                    </b-col>
                </b-row>

                <hr><span class="text-info mb-5">Dirección</span>

                <b-row class="mb-2 mt-2">
                    <b-col>
                        <strong class="text-dark">Calle:</strong>
                    </b-col>
                    <b-col v-if="!editar">
                        {{ usuario.calle }}
                    </b-col>
                     <b-col v-if="editar">
                        <b-form-input v-model="usuario.calle"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Localidad:</strong>
                    </b-col>
                    <b-col v-if="!editar">
                        {{ usuario.localidad }}
                    </b-col>
                     <b-col v-if="editar">
                        <b-form-input v-model="usuario.localidad"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Provincia:</strong>
                    </b-col>
                    <b-col v-if="!editar">
                        {{ usuario.provincia }}
                    </b-col>
                    <b-col v-if="editar">
                        <b-form-input v-model="usuario.provincia"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Código postal:</strong>
                    </b-col>
                    <b-col v-if="!editar">
                        {{ usuario.cp }}
                    </b-col>
                    <b-col v-if="editar">
                        <b-form-input v-model="usuario.cp"></b-form-input>
                    </b-col>
                </b-row>

                <b-row class="mt-3">
                    <b-col>
                        <b-button variant="outline-primary" v-if="!editar" @click="editarPerfil">Editar</b-button>
                        <b-button variant="outline-success" v-if="editar" @click="actualizarPerfil(usuario.nombre, usuario.apellidos, usuario.email, usuario.password, usuario.dni, usuario.calle, usuario.localidad, usuario.provincia, usuario.cp)">Actualizar</b-button>
                        <b-button variant="outline-danger" v-if="editar" @click="editar = false">Cancelar</b-button>
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
            usuario: [],
            editar: false,
            fecha : '10-10-1960',
            confirmarPass: ''
        }),
        mounted () {
            axios
                .get('/misdatos')
                .then(response => (
                    this.usuario = response.data
                ))
        },
        methods: {
            editarPerfil(){
                this.editar = true;
            },
            actualizarPerfil(nombreEdit, apellidosEdit, emailEdit, passEdit, dniEdit, calleEdit, localidadEdit, provinciaEdit, cpEdit){
                var ruta = '/editar-datos'
                $.ajax({
                    type: 'PUT',
                    url: ruta,
                    data: ({nombre: nombreEdit,
                            apellidos: apellidosEdit,
                            email: emailEdit,
                            pass: passEdit,
                            dni: dniEdit,
                            calle: calleEdit,
                            localidad: localidadEdit,
                            provincia: provinciaEdit,
                            cp: cpEdit
                            }),
                    async: true,
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                        this.usuario = data
                    }
                }) 
                this.editar = false;
            }
        }
    }
</script>