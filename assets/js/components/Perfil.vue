<template>
    <div class="mt-5 mb-5 text-center">
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
                        <b-form-input name="nombre" id="nombre" v-model="usuario.nombre" placeholder="usuario.nombre"></b-form-input>
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
                
                <!-- Datos Jugador -->
                <div v-if="existeJugador">
                    <hr><span class="text-info mb-5">Jugador</span>
                    <b-row class="mb-2">
                        <b-col>
                            <strong class="text-dark">Categoria:</strong>
                        </b-col>
                        <b-col v-if="!editar">
                            {{ jugador.categoria }}
                        </b-col>
                        <b-col v-if="editar">
                            <b-form-select v-model="jugador.categoria" :options="categorias"></b-form-select>
                        </b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col>
                            <strong class="text-dark">Talla de Camiseta:</strong>
                        </b-col>
                        <b-col v-if="!editar">
                            {{ jugador.camiseta }}
                        </b-col>
                        <b-col v-if="editar">
                            <b-form-select v-model="jugador.camiseta" :options="tallas"></b-form-select>
                        </b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col>
                            <strong class="text-dark">Talla de pantalón:</strong>
                        </b-col>
                        <b-col v-if="!editar">
                            {{ jugador.pantalon }}
                        </b-col>
                        <b-col v-if="editar">
                            <b-form-select v-model="jugador.pantalon" :options="tallas"></b-form-select>
                        </b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col>
                            <strong class="text-dark">Talla de medias:</strong>
                        </b-col>
                        <b-col v-if="!editar">
                            {{ jugador.medias }}
                        </b-col>
                        <b-col v-if="editar">
                            <b-form-select v-model="jugador.medias" :options="tallas"></b-form-select>
                        </b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col>
                            <strong class="text-dark">Talla de abrigo:</strong>
                        </b-col>
                        <b-col v-if="!editar">
                            {{ jugador.abrigo }}
                        </b-col>
                        <b-col v-if="editar">
                            <b-form-select v-model="jugador.abrigo" :options="tallas"></b-form-select>
                        </b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col>
                            <strong class="text-dark">Método de pago:</strong>
                        </b-col>
                        <b-col v-if="!editar">
                            {{ jugador.pago }}
                        </b-col>
                        <b-col v-if="editar">
                            <b-form-select v-model="jugador.pago" :options="pago"></b-form-select>
                        </b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col>
                            <b-button variant="outline-danger" @click="bajaJugador" v-if="editar">Baja jugador</b-button>
                        </b-col>                    
                    </b-row>
                </div>

                <!-- Datos Socio -->
                <div v-if="existeSocio">
                    <hr><span class="text-info mb-5">Socio</span>
                    <b-row class="mb-2">
                        <b-col>
                            <strong class="text-dark">Método de pago:</strong>
                        </b-col>
                        <b-col v-if="!editar">
                            {{ socio.pago }}
                        </b-col>
                        <b-col v-if="editar">
                            <b-form-select v-model="socio.pago" :options="pago"></b-form-select>
                        </b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col>
                            <b-button variant="outline-danger" @click="cancelarAbono" v-if="editar">Cancelar abono socio</b-button>
                        </b-col>                    
                    </b-row>
                </div>

                <!-- Datos Entrenador -->
                <div v-if="existeEntrenador">
                    <hr><span class="text-info mb-5">Entrenador</span>
                    <b-row class="mb-2">
                        <b-col class="mt-3">
                            <strong class="text-dark">Titulo enviado:</strong>
                        </b-col>
                        <b-col v-if="!editar" class="mt-3">
                            {{ entrenador.titulo }}
                        </b-col>
                        <b-col v-if="editar" class="mt-3">
                            <b-form-file
                                v-model="file"
                                :state="Boolean(file)"
                                placeholder="Elija un archivo o desplácelo aquí..."
                                drop-placeholder="Soltar archivo aquí..."
                                browse-text="Elegir"
                                id="file" name="file"
                            ></b-form-file>
                        </b-col>
                    </b-row>
                    <b-row class="mb-2 mt-3">
                        <b-col>
                            <b-button variant="outline-danger" @click="bajaEntrenador" v-if="editar">Baja entrenador</b-button>
                            <b-button variant="outline-success" v-if="editar" @click="enviarTitulo">Enviar otro título</b-button>
                        </b-col>  
                    </b-row>
                </div>

                <hr>

                <b-row class="mt-3">
                    <b-col>
                        <b-button variant="outline-primary" v-if="!editar" @click="editarPerfil">Editar</b-button>
                        <b-button variant="outline-danger" v-if="!editar" @click="eliminarPerfil(usuario.id)">Eliminar cuenta</b-button>
                        <b-button variant="outline-success" v-if="editar" @click="actualizarPerfil">Actualizar</b-button>
                        <b-button variant="outline-danger" v-if="editar" @click="cancelarEdicion">Cancelar</b-button>
                    </b-col>
                </b-row>                
            </b-card>

            <!-- Mensaje eliminación jugador, socio o entrenador -->
            <small v-if="parrafo">Si eres jugador/a, soci@ o entrenador/a y deseas tramitar la baja, pulsa antes el botón editar.</small>

            <!-- Copyright -->
            <p class="mt-5 text-center" v-if="copyright">&copy;2020 IF-ormáticos FC</p>

        </b-container>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data: () => ({
            usuario: [],
            jugador: [],
            socio: [],
            entrenador: [],
            file:[],
            existeJugador: false,
            existeSocio: false,
            existeEntrenador: false,
            editar: false,
            parrafo: false,
            copyright: false,
            eliminar: '',
            eliminarSocio: '',
            eliminarJugador: '',
            eliminarEntrenador: '',
            fecha: '',
            confirmarPass: '',
            categorias:[
                {value: null, text: 'Seleccione un categoría'},
                {value: 'Benjamin', text: 'Benjamín'},
                {value: 'Alevin', text: 'Alevín'},
                {value: 'Infantil', text: 'Infantil'},
                {value: 'Cadete', text: 'Cadete'},
                {value: 'Juvenil', text: 'Juvenil'},
                {value: 'Aficionado', text: 'Aficionado'},
                {value: 'Veterano', text: 'Veterano'}
            ],
            tallas:[
                {value: null, text: 'Seleccione una talla'},
                {value: 'S', text: 'S'},
                {value: 'M', text: 'M'},
                {value: 'L', text: 'L'},
                {value: 'XL', text: 'XL'}
            ],
            pago:[
                {value: null, text: 'Seleccione un método de pago'},
                {value: 'Paypal', text: 'Paypal'},
                {value: 'Tarjeta crédito/débito', text: 'Tarjeta crédito/débito'},
                {value: 'Domiciliación bancaria', text: 'Domiciliación bancaria'}
            ]
        }),
        mounted () {
            axios.get('/misdatos')
                .then(response => (
                    this.usuario = response.data,
                    this.parrafo = true,
                    this.copyright = true
                ))
            
            axios.get('/datos-jugadores')
                .then(response => {
                    if(response.data.id){
                        this.jugador = response.data,
                        this.existeJugador = true 
                    }                                      
                })

            axios.get('/datos-socios')
            .then(response => {
                if(response.data.id){
                    this.socio = response.data,
                    this.existeSocio = true 
                }                                      
            })

            axios.get('/datos-entrenadores')
            .then(response => {
                if(response.data.id){
                    this.entrenador = response.data,
                    this.existeEntrenador = true
                }                                      
            })
        },
        methods: {
            editarPerfil(){
                this.editar = true;
                this.parrafo = false;

                this.fecha = this.usuario.fechaNacimiento.date.substring(0,10)
                console.log(this.fecha);  
            },  
            cancelarEdicion(){
                this.editar = false;
                this.parrafo = true;
            }, 
            enviarTitulo(){
                var ruta = '/editar-entrenador'
                var formData = new FormData()
                formData.append('file', document.getElementById('file').files[0])
                $.ajax({
                    type: 'POST',
                    url: ruta,
                    data: formData,
                    enctype: 'multipart/form-data',
                    processData: false,
                    contentType: false,
                    cache: false,
                    success: function (data) {
                        console.log(data)
                    }
                })
                if (location.reload(true)) {
                    this.editar = false;
                }
            },         
            actualizarPerfil(){
                var ruta = '/editar-datos'
                $.ajax({
                    type: 'PUT',
                    url: ruta,
                    data: ({ 
                            // Datos Usuario
                            nombre: this.usuario.nombre,
                            apellidos: this.usuario.apellidos,
                            email: this.usuario.email,
                            fecha: this.fecha,
                            pass: this.usuario.password,
                            dni: this.usuario.dni,
                            calle: this.usuario.calle,
                            localidad: this.usuario.localidad,
                            provincia: this.usuario.provincia,
                            cp: this.usuario.cp,

                            // Datos Jugador
                            categoria: this.jugador.categoria,
                            camiseta: this.jugador.camiseta,
                            pantalon: this.jugador.pantalon,
                            medias: this.jugador.medias,
                            abrigo: this.jugador.abrigo,
                            pagoJugador: this.jugador.pago,

                            // Datos Socio
                            pagoSocio: this.socio.pago
                            }),
                    async: true,
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                        this.usuario = data
                    }
                }) 
                if (location.reload(true)) {
                    this.editar = false;
                }
            },
            cancelarAbono() {
                this.eliminarSocio = ''
                this.$bvModal.msgBoxConfirm('¿Estás segur@?', {
                    title: 'Cancelación del abono de socio',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'danger',
                    cancelVariant: 'success',
                    okTitle: 'SI',
                    cancelTitle: 'NO',
                    footerClass: 'p-2',
                    hideHeaderClose: false,
                    centered: true
                })
                .then(value => {
                    this.eliminarSocio = value
                    if (this.eliminarSocio) {
                        $.ajax({
                            type: 'POST',
                            url: '/eliminar-socio',
                            data: ({id: this.socio.id}),
                            async: true,
                            datatype: 'json',
                            success: function (data) {
                                console.log(data)
                            }
                        })
                        console.log('Abono cancelado correctamente');
                        if (location.reload(true)) {
                            this.editar = false;
                        }
                    } else {
                        console.log('Abono NO cancelado');
                    }
                })
            },
            bajaJugador(){
                this.eliminarJugador = ''
                this.$bvModal.msgBoxConfirm('¿Estás segur@?', {
                    title: 'Baja de jugador/a',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'danger',
                    cancelVariant: 'success',
                    okTitle: 'SI',
                    cancelTitle: 'NO',
                    footerClass: 'p-2',
                    hideHeaderClose: false,
                    centered: true
                })
                .then(value => {
                    this.eliminarJugador = value
                    if (this.eliminarJugador) {
                        $.ajax({
                            type: 'POST',
                            url: '/eliminar-jugador',
                            data: ({id: this.jugador.id}),
                            async: true,
                            datatype: 'json',
                            success: function (data) {
                                console.log(data)
                            }
                        })
                        console.log('Baja jugador tramitada correctamente');
                        if (location.reload(true)) {
                            this.editar = false;
                        }
                    } else {
                        console.log('Baja jugador NO tramitada');
                    }
                })
            },
            bajaEntrenador(){
                this.eliminarEntrenador = ''
                this.$bvModal.msgBoxConfirm('¿Estás segur@?', {
                    title: 'Baja de entrenador/a',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'danger',
                    cancelVariant: 'success',
                    okTitle: 'SI',
                    cancelTitle: 'NO',
                    footerClass: 'p-2',
                    hideHeaderClose: false,
                    centered: true
                })
                .then(value => {
                    this.eliminarEntrenador = value
                    if (this.eliminarEntrenador) {
                        $.ajax({
                            type: 'POST',
                            url: '/eliminar-entrenador',
                            data: ({id: this.entrenador.id}),
                            async: true,
                            datatype: 'json',
                            success: function (data) {
                                console.log(data)
                            }
                        })
                        console.log('Baja entrenador tramitada correctamente');
                        if (location.reload(true)) {
                            this.editar = false;
                        }
                    } else {
                        console.log('Baja entrenador NO tramitada');
                    }
                }) 
            },
            eliminarPerfil(idUsuario) {
                this.eliminar = ''
                this.$bvModal.msgBoxConfirm('¿Realmente quieres eliminar tu cuenta?', {
                title: 'Eliminar cuenta',
                size: 'sm',
                buttonSize: 'sm',
                okVariant: 'danger',
                cancelVariant: 'success',
                okTitle: 'SI',
                cancelTitle: 'NO',
                footerClass: 'p-2',
                hideHeaderClose: false,
                centered: true
                })
                .then(value => {
                    this.eliminar = value
                    if (this.eliminar) {
                        var ruta = '/eliminar-usuario'
                        $.ajax({
                            type: 'POST',
                            url: ruta,
                            data: ({id: idUsuario}),
                            async: true,
                            dataType: 'json',
                            success: function (data) {
                                console.log(data)                                
                                window.location = "/login"
                            }
                        })
                    } else {
                        console.log('Usuario NO eliminado');
                    }
                })
            } 
        }
    }
</script>