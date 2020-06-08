<template>
    <div class="mt-5 mb-5 text-center">
        <b-container class="text-center d-flex justify-content-center align-items-center">
            <!-- Botón animado mientras se carga el ajax -->
            <b-button variant="info" disabled v-if="!usuario.fechaNacimiento">
                <b-spinner small type="grow"></b-spinner>
                Cargando...
            </b-button>

            <!-- Card con todo el contenido de Mi perfil -->
            <b-card
                header="Mi perfil"
                header-text-variant="white"
                header-tag="header"
                header-bg-variant="info"
                style="width: 50em;"
                v-if="usuario.fechaNacimiento"
                
            >
                <!-- Nombre y apellidos del usuario -->
                <h3 v-if="!editar">{{ usuario.nombre }} {{ usuario.apellidos }}</h3>

                <!-- Edición y validación Nombre del usuario -->
                <b-row class="mb-2" v-if="editar">
                    <b-col>
                        <strong class="text-dark">Nombre:</strong>
                    </b-col>
                    <b-col>
                        <b-form-input name="nombre" id="nombre" ref="usuarioNombre" v-model="usuario.nombre" placeholder="Introduce aquí tu nombre"></b-form-input>
                        <span id="nombreError" class="text-danger"></span>
                    </b-col>
                </b-row>

                <!-- Edición y validación Apellidos del usuario -->
                <b-row class="mb-2" v-if="editar">
                    <b-col>
                        <strong class="text-dark">Apellidos:</strong>
                    </b-col>
                    <b-col>
                        <b-form-input v-model="usuario.apellidos" id="usuarioApellidos" placeholder="Introduce aquí tus apellidos"></b-form-input>
                        <span id="apellidosError" class="text-danger"></span>
                    </b-col>
                </b-row>

                <!-- Edición y validación Email del usuario -->
                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Email:</strong>
                    </b-col>
                    <b-col v-if="!editar">
                        {{ usuario.email }}
                    </b-col>
                     <b-col v-if="editar">
                        <b-form-input v-model="usuario.email" id="usuarioEmail" placeholder="Introduce aquí tu email"></b-form-input>
                        <span id="emailError" class="text-danger"></span>
                    </b-col>
                </b-row>

                <!-- Edición y validación Contraseña del usuario -->
                <b-row class="mb-2" v-if="editar">
                    <b-col>
                        <strong class="text-dark">Contraseña:</strong>
                    </b-col>
                     <b-col>
                        <b-form-input type="password" v-model="usuario.password" id="usuarioPassword" placeholder="Introduce aquí una contraseña"></b-form-input>
                        <span id="passwordError" class="text-danger"></span>
                    </b-col>
                </b-row>

                <!-- Edición y validación Confirmar contraseña del usuario -->
                <b-row class="mb-2" v-if="editar">
                    <b-col>
                        <strong class="text-dark">Confirmar contraseña:</strong>
                    </b-col>
                     <b-col>
                        <b-form-input type="password" id="confirmPass" placeholder="Repite la contraseña"></b-form-input>
                        <span id="confirmPasswordError" class="text-danger"></span>
                    </b-col>
                </b-row>


                <!-- Mostrar/ocultar contraseña -->
                <b-row class="mb-2" v-if="editar">
                    <b-col></b-col>
                     <b-col>
                        <strong class="text-dark">Ver contraseñas</strong>
                        <b-form-checkbox id="showPasswords"></b-form-checkbox>
                    </b-col>
                </b-row>


                <!-- Edición y validación Dni del usuario -->
                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Dni:</strong>
                    </b-col>
                    <b-col v-if="!editar">
                        {{ usuario.dni }}
                    </b-col>
                     <b-col v-if="editar">
                        <b-form-input v-model="usuario.dni" id="usuarioDni" maxlength="9" placeholder="Introduce aquí tu dni"></b-form-input>
                        <span id="dniError" class="text-danger"></span>
                    </b-col>
                </b-row>

                <!-- Edición y validación Fecha de nacimiento del usuario -->
                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Fecha de nacimiento:</strong>
                    </b-col>
                    <b-col v-if="!editar">
                        {{ usuario.fechaNacimiento.date.substring(0,10)}}                       
                    </b-col>
                     <b-col v-if="editar">
                        <b-form-input type="date" v-model="fecha" id="date" placeholder="Introduce aquí tu fecha de nacimiento"></b-form-input>
                    </b-col>
                </b-row>

                <hr><span class="text-info mb-5">Dirección</span>

                <!-- Edición y validación Calle del usuario -->
                <b-row class="mb-2 mt-2">
                    <b-col>
                        <strong class="text-dark">Calle:</strong>
                    </b-col>
                    <b-col v-if="!editar">
                        {{ usuario.calle }}
                    </b-col>
                     <b-col v-if="editar">
                        <b-form-input v-model="usuario.calle" id="usuarioCalle" placeholder="Introduce aquí tu calle"></b-form-input>
                        <span id="calleError" class="text-danger"></span>
                    </b-col>
                </b-row>

                <!-- Edición y validación Localidad del usuario -->
                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Localidad:</strong>
                    </b-col>
                    <b-col v-if="!editar">
                        {{ usuario.localidad }}
                    </b-col>
                     <b-col v-if="editar">
                        <b-form-input v-model="usuario.localidad" id="usuarioLocalidad" placeholder="Introduce aquí tu localidad"></b-form-input>
                        <span id="localidadError" class="text-danger"></span>
                    </b-col>
                </b-row>

                <!-- Edición y validación Provincia del usuario -->
                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Provincia:</strong>
                    </b-col>
                    <b-col v-if="!editar">
                        {{ usuario.provincia }}
                    </b-col>
                    <b-col v-if="editar">
                        <b-form-input v-model="usuario.provincia" id="usuarioProvincia" placeholder="Introduce aquí tu provincia"></b-form-input>
                        <span id="provinciaError" class="text-danger"></span>
                    </b-col>
                </b-row>

                <!-- Edición y validación Código postal del usuario -->
                <b-row class="mb-2">
                    <b-col>
                        <strong class="text-dark">Código postal:</strong>
                    </b-col>
                    <b-col v-if="!editar">
                        {{ usuario.cp }}
                    </b-col>
                    <b-col v-if="editar">
                        <b-form-input v-model="usuario.cp" id="usuarioCp" maxlength="5" placeholder="Introduce aquí tu código postal"></b-form-input>
                        <span id="cpError" class="text-danger"></span>
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
                            <b-form-select v-model="jugador.categoria" :options="categorias" id="validarCategoria"></b-form-select>
                            <span id="categoriaError" class="text-danger"></span>
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
                            <b-form-select v-model="jugador.camiseta" :options="tallas" id="validarCamiseta"></b-form-select>
                            <span id="camisetaError" class="text-danger"></span>

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
                            <b-form-select v-model="jugador.pantalon" :options="tallas" id="validarPantalon"></b-form-select>
                            <span id="pantalonError" class="text-danger"></span>

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
                            <b-form-select v-model="jugador.medias" :options="tallas" id="validarMedias"></b-form-select>
                            <span id="mediasError" class="text-danger"></span>

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
                            <b-form-select v-model="jugador.abrigo" :options="tallas" id="validarAbrigo"></b-form-select>
                            <span id="abrigoError" class="text-danger"></span>
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
                            <b-form-select v-model="jugador.pago" :options="pago" id="validarPagoJugador"></b-form-select>
                            <span id="pagoJugadorError" class="text-danger"></span>

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
                            <b-form-select v-model="socio.pago" id="validarPagoSocio" :options="pago"></b-form-select>
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
                            <b-button variant="outline-success" id="botonEntrenador" v-if="editar" @click="enviarTitulo">Enviar otro título</b-button>
                        </b-col>  
                    </b-row>
                </div>

                <hr>

                <b-row class="mt-3">
                    <b-col>
                        <b-button variant="outline-primary" v-if="!editar" id="edicion" @click="editarPerfil">Editar</b-button>
                        <b-button variant="outline-danger" v-if="!editar" @click="eliminarPerfil(usuario.id)">Eliminar cuenta</b-button>
                        <b-button variant="outline-success" v-if="editar" id="saveChanges" @click="actualizarPerfil">Actualizar</b-button>
                        <b-button variant="outline-danger" v-if="editar" @click="cancelarEdicion">Cancelar</b-button>
                    </b-col>
                </b-row>                
            </b-card>



        </b-container>

        <!-- Mensaje eliminación jugador, socio o entrenador -->
        <small v-if="parrafo">Si eres jugador/a, soci@ o entrenador/a y deseas tramitar la baja, pulsa antes el botón editar.</small>
        <small v-if="mensajeContraseña">Si no quieres modificar las contraseñas, deja el campo vacío</small>

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
            mensajeContraseña: false,
            copyright: false,
            eliminar: '',
            eliminarSocio: '',
            eliminarJugador: '',
            eliminarEntrenador: '',
            fecha: '',
            confirmarPass: '',
            contraseñaGuardada: '',
            categorias:[
                {value: 'Benjamin', text: 'Benjamín'},
                {value: 'Alevin', text: 'Alevín'},
                {value: 'Infantil', text: 'Infantil'},
                {value: 'Cadete', text: 'Cadete'},
                {value: 'Juvenil', text: 'Juvenil'},
                {value: 'Aficionado', text: 'Aficionado'},
                {value: 'Veterano', text: 'Veterano'}
            ],
            tallas:[
                {value: 'S', text: 'S'},
                {value: 'M', text: 'M'},
                {value: 'L', text: 'L'},
                {value: 'XL', text: 'XL'}
            ],
            pago:[
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
                    this.copyright = true,
                    this.mensajeContraseña = false
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
                this.mensajeContraseña = true;            
                this.fecha = this.usuario.fechaNacimiento.date.substring(0,10);   

                this.$nextTick(function () {

                    // Puntero body
                    document.querySelector('body').style.cursor = "pointer";

                    // Variables del usuario
                    var usuarioNombre = document.getElementById("nombre");
                    var usuarioApellidos = document.getElementById("usuarioApellidos");
                    var usuarioEmail = document.getElementById("usuarioEmail");
                    var usuarioPassword = document.getElementById("usuarioPassword");
                    var confirmarPassword = document.getElementById("confirmPass");
                    var usuarioDni = document.getElementById("usuarioDni");
                    var usuarioCalle = document.getElementById("usuarioCalle");
                    var usuarioLocalidad = document.getElementById("usuarioLocalidad");
                    var usuarioProvincia = document.getElementById("usuarioProvincia");
                    var usuarioCp = document.getElementById("usuarioCp");
                    var showPasswords = document.getElementById("showPasswords");
                    var botonSave = document.getElementById("saveChanges");

                    // Variables del usuario Jugador
                    var categoria = document.getElementById("validarCategoria");
                    var camiseta = document.getElementById("validarCamiseta");
                    var pantalon = document.getElementById("validarPantalon");
                    var medias = document.getElementById("validarMedias");
                    var abrigo = document.getElementById("validarAbrigo");
                    var pagoJugador = document.getElementById("validarPagoJugador");

                    // Variable del usuario Socio
                    var pagoSocio = document.getElementById("validarPagoSocio");

                    // Variable del usuario Entrenador
                    var entrenador = document.getElementById("file");
                    var botonEntrenador = document.getElementById("botonEntrenador");
                    
                    // Errores de usuario
                    var nombreError = document.getElementById("nombreError");
                    var apellidosError = document.getElementById("apellidosError");
                    var emailError = document.getElementById("emailError");
                    var passwordError = document.getElementById("passwordError");
                    var confirmPasswordError = document.getElementById("confirmPasswordError");
                    var dniError = document.getElementById("dniError");
                    var calleError = document.getElementById("calleError");
                    var localidadError = document.getElementById("localidadError");
                    var provinciaError = document.getElementById("provinciaError");
                    var cpError = document.getElementById("cpError");

                    // Ok validaciones Usuario
                    var nombreFill = true;
                    var apellidosFill = true;
                    var dniFill = true;
                    var emailFill = true;
                    var contraseñaFill = true;
                    var confirmarContraseñaFill = true;
                    var fechaNacimientoFill = true;
                    var calleFill = true;
                    var localidadFill = true;
                    var provinciaFill = true;
                    var cpFill = true;
                    var modificacionesUsuario = false;

                    // Ok validaciones Usuario Jugador
                    var okCategoria = true;
                    var okCamiseta = true;
                    var okPantalon = true;
                    var okMedias = true;
                    var okAbrigo = true;
                    var okPagoJugador = true;  

                    // Ok validación Usuario Socio                    
                    var okPagoSocio = true;

                    // Ok validación Usuario Entrenador                    
                    var okEntrenador = true;
                    

                    // FUNCION COMPROBACION EDITAR PERFIL
                    function comprobacion(){
                        if(nombreFill && apellidosFill && dniFill && emailFill && fechaNacimientoFill
                            && calleFill && localidadFill && provinciaFill && cpFill) {
                            if((contraseñaFill && confirmarContraseñaFill) || (!contraseñaFill && !confirmarContraseñaFill)){
                                
                                // Comprobación de existencia de usuario Jugador + Socio + Entrenador
                                if(categoria && pagoSocio && entrenador) {
                                    if(okCategoria && okCamiseta && okPantalon && okAbrigo && okMedias && okPagoJugador && okPagoSocio && okEntrenador) {
                                        saveChanges.disabled = false;
                                        botonSave.style.cursor = "pointer";
                                        botonSave.className = "btn btn-outline-success";
                                    } else {
                                         if (modificacionesUsuario) {
                                            saveChanges.disabled = false;
                                            botonSave.style.cursor = "pointer";
                                            botonSave.className = "btn btn-outline-success";
                                        } else {
                                            saveChanges.disabled = true;
                                            botonSave.style.cursor = "not-allowed";
                                            botonSave.className = "btn btn-outline-danger";
                                        }
                                    }
                                } else {
                                    // Comprobación de existencia de usuario Jugador + Socio
                                    if(categoria && pagoSocio) {
                                        if(okCategoria && okCamiseta && okPantalon && okAbrigo && okMedias && okPagoJugador && okPagoSocio) {
                                            saveChanges.disabled = false;
                                            botonSave.style.cursor = "pointer";
                                            botonSave.className = "btn btn-outline-success";
                                        } else {
                                             if (modificacionesUsuario) {
                                                saveChanges.disabled = false;
                                                botonSave.style.cursor = "pointer";
                                                botonSave.className = "btn btn-outline-success";
                                            } else {
                                                saveChanges.disabled = true;
                                                botonSave.style.cursor = "not-allowed";
                                                botonSave.className = "btn btn-outline-danger";
                                            }
                                        }
                                    }

                                    // Comprobación de existencia de usuario Jugador + Entrenador
                                    if(categoria && entrenador) {
                                        if(okCategoria && okCamiseta && okPantalon && okAbrigo && okMedias && okPagoJugador && okEntrenador) {
                                            saveChanges.disabled = false;
                                            botonSave.style.cursor = "pointer";
                                            botonSave.className = "btn btn-outline-success";
                                        } else {
                                            if (modificacionesUsuario) {
                                                saveChanges.disabled = false;
                                                botonSave.style.cursor = "pointer";
                                                botonSave.className = "btn btn-outline-success";
                                            } else {
                                                saveChanges.disabled = true;
                                                botonSave.style.cursor = "not-allowed";
                                                botonSave.className = "btn btn-outline-danger";
                                            }
                                        }
                                    }

                                    // Comprobación de existencia de usuario Socio + Entrenador
                                    if(pagoSocio && entrenador) {
                                        if(okPagoSocio && okEntrenador) {
                                            saveChanges.disabled = false;
                                            botonSave.style.cursor = "pointer";
                                            botonSave.className = "btn btn-outline-success";
                                        } else {
                                            if (modificacionesUsuario) {
                                                saveChanges.disabled = false;
                                                botonSave.style.cursor = "pointer";
                                                botonSave.className = "btn btn-outline-success";
                                            } else {
                                                saveChanges.disabled = true;
                                                botonSave.style.cursor = "not-allowed";
                                                botonSave.className = "btn btn-outline-danger";
                                            }
                                        }

                                    }

                                    // Comprobación de existencia de usuario Jugdor
                                    if(categoria && !pagoSocio && !entrenador) {
                                        if(okCategoria){
                                            saveChanges.disabled = false;
                                            botonSave.style.cursor = "pointer";
                                            botonSave.className = "btn btn-outline-success";
                                        } else {
                                            if (modificacionesUsuario) {
                                                saveChanges.disabled = false;
                                                botonSave.style.cursor = "pointer";
                                                botonSave.className = "btn btn-outline-success";
                                            } else {
                                                saveChanges.disabled = true;
                                                botonSave.style.cursor = "not-allowed";
                                                botonSave.className = "btn btn-outline-danger";
                                            }
                                        }
                                    }

                                    // Comprobación de existencia de usuario Socio
                                    if(pagoSocio && !categoria && !entrenador) {
                                        if(okPagoSocio){
                                            saveChanges.disabled = false;
                                            botonSave.style.cursor = "pointer";
                                            botonSave.className = "btn btn-outline-success";
                                        } else {
                                            if (modificacionesUsuario) {
                                                saveChanges.disabled = false;
                                                botonSave.style.cursor = "pointer";
                                                botonSave.className = "btn btn-outline-success";
                                            } else {
                                                saveChanges.disabled = true;
                                                botonSave.style.cursor = "not-allowed";
                                                botonSave.className = "btn btn-outline-danger";
                                            }
                                        }
                                    }

                                    // Comprobación de existencia de usuario Entrenador
                                    if(entrenador && !categoria && !pagoSocio) {
                                        if(okEntrenador){
                                            saveChanges.disabled = false;
                                            botonSave.style.cursor = "pointer";
                                            botonSave.className = "btn btn-outline-success";
                                        } else {
                                            if (modificacionesUsuario) {
                                                saveChanges.disabled = false;
                                                botonSave.style.cursor = "pointer";
                                                botonSave.className = "btn btn-outline-success";
                                            } else {
                                                saveChanges.disabled = true;
                                                botonSave.style.cursor = "not-allowed";
                                                botonSave.className = "btn btn-outline-danger";
                                            }
                                        }
                                    }
                                }
                            } else {
                                saveChanges.disabled = true;
                                botonSave.style.cursor = "not-allowed";
                                botonSave.className = "btn btn-outline-danger";
                            }
                        } else {
                            saveChanges.disabled = true;
                            botonSave.style.cursor = "not-allowed";
                            botonSave.className = "btn btn-outline-danger";
                        }                    
                    }
                    // Cierre de función conprobación

                    botonSave.disabled = true;
                    botonSave.style.cursor = "not-allowed";
                    botonSave.className = "btn btn-outline-danger";

                    showPasswords.onclick = () => {
                        if(showPasswords.checked) {
                            console.log('checked');
                            usuarioPassword.type = "text";
                            confirmarPassword.type = "text";
                        } else {
                            console.log('not checked');
                            usuarioPassword.type = "password";
                            confirmarPassword.type = "password";
                        }
                    }

                    /* VALIDACIONES USUARIO */
                    
                    // Validación: Nombre
                    nombreError.innerHTML = "";
                    usuarioNombre.onkeyup = () => {
                        const regExpNombre =/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
                        if(regExpNombre.test(usuarioNombre.value)){
                            nombreError.innerHTML = "";
                            usuarioNombre.style.borderColor = "";
                            modificacionesUsuario = true;
                            nombreFill = true;
                            comprobacion();
                        }
                        if(!regExpNombre.test(usuarioNombre.value)){
                            nombreError.innerHTML = "El campo debe tener una cadena de caracteres";
                            usuarioNombre.style.borderColor = "red";
                            nombreFill = false;
                            modificacionesUsuario = false;
                            comprobacion();
                        }
                        if(usuarioNombre.value == ""){
                            nombreError.innerHTML = "El campo no puede estar vacío";
                            usuarioNombre.style.borderColor = "red";
                            nombreFill = false;
                            modificacionesUsuario = false;
                        }
                    }

                    // Validación: Apellidos
                    apellidosError.innerHTML = "";
                    usuarioApellidos.onkeyup = () => {
                        const regExpApellidos =/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
                                    
                        if(regExpApellidos.test(usuarioApellidos.value)){
                            apellidosError.innerHTML = "";
                            usuarioApellidos.style.borderColor = "";
                            apellidosFill = true;
                            modificacionesUsuario = true;
                            comprobacion();
                        }
                        if(!regExpApellidos.test(usuarioApellidos.value)){
                            apellidosError.innerHTML = "El campo debe tener una cadena de caracteres";
                            usuarioApellidos.style.borderColor = "red";
                            apellidosFill = false;
                            modificacionesUsuario = false;
                            comprobacion();
                        }
                        if(usuarioApellidos.value == ""){
                            apellidosError.innerHTML = "El campo no puede estar vacío";
                            usuarioApellidos.style.borderColor = "red";
                            apellidosFill = false;
                            modificacionesUsuario = false;
                            comprobacion();
                        }
                    }

                    // Validación: Dni                        
                    dniError.innerHTML = "";
                    usuarioDni.onkeyup = () => {
                        var numero = usuarioDni.value.substr(0,usuarioDni.value.length-1);
                        var letra = usuarioDni.value.substr(usuarioDni.value.length-1,1);
                        var letraMayuscula = letra.toUpperCase();
                        usuarioDni.value = numero+letraMayuscula;
                        
                        const regExpDni =/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
                        if(regExpDni.test(usuarioDni.value)){ 
                            dniError.innerHTML = "";
                            usuarioDni.style.borderColor = "";
                                $.ajax({
                                    type: 'POST',
                                    url: '/comprobar-dni',
                                    data: ({dni: usuarioDni.value.toString()}),
                                    async: true,
                                    dataType: 'json',
                                    success: function (data) {
                                        comprobarDni(data)
                                }
                            })
                            dniFill = true;
                            modificacionesUsuario = true;
                            comprobacion();
                        }
                        if(!regExpDni.test(usuarioDni.value)){
                            dniError.innerHTML = "El campo debe contener 8 números y 1 letra válida";
                            usuarioDni.style.borderColor = "red";
                            dniFill = false;
                            modificacionesUsuario = false;
                            comprobacion();
                        }
                        if(usuarioDni.value == ""){
                            dniError.innerHTML = "El campo no puede estar vacío";
                            usuarioDni.style.borderColor = "red";
                            dniFill = false;
                            modificacionesUsuario = false;
                            comprobacion();
                        }
                    }

                    function comprobarDni(valor) {
                        // dni
                        if (valor) {
                            console.log('DNI repetido');
                            dniError.innerHTML = "Este DNI ya existe, introduce otro";
                            usuarioDni.style.borderColor = "red";
                            dniFill = false;
                            modificacionesUsuario = false;
                            console.log('DNI: '+dniFill);
                            comprobacion();
                        } else {
                            console.log('DNI correcto');
                            dniError.innerHTML = "";
                            usuarioDni.style.borderColor = "";
                            dniFill = true;
                            modificacionesUsuario = true;
                            console.log('DNI: '+dniFill);
                            comprobacion();
                        }
                    }
 
                    // Validación: Email
                    emailError.innerHTML = "";
                    usuarioEmail.onkeyup = () => {
                        const regExpEmail =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
                        if(regExpEmail.test(usuarioEmail.value)){
                            emailError.innerHTML = "";
                            usuarioEmail.style.borderColor = "";
                            const ruta = '/comprobar-email';
                            $.ajax({
                                type: 'POST',
                                url:  ruta,
                                data: ({email: usuarioEmail.value.toString()}),
                                async: true,
                                dataType: 'json',
                                success: function (data) {
                                    comprobarEmail(data)
                                }
                            })
                        }
                        if(!regExpEmail.test(usuarioEmail.value)){
                            emailError.innerHTML = "El campo debe tener formato email";
                            usuarioEmail.style.borderColor = "red";
                            emailFill = false;
                            modificacionesUsuario = false;
                            comprobacion();
                        }
                        if(usuarioEmail.value == ""){
                            emailError.innerHTML = "El campo no puede estar vacío";
                            usuarioEmail.style.borderColor = "red";
                            emailFill = false;
                            modificacionesUsuario = false;
                            comprobacion();
                        }
                    }
            
                    function comprobarEmail(valor) {
                        // email
                        if (valor) {
                            console.log('email repetido');
                            emailError.innerHTML = "Este email ya existe, introduce otro";
                            usuarioEmail.style.borderColor = "red";
                            emailFill = false;
                            modificacionesUsuario = false;
                            console.log('email: '+emailFill);
                            comprobacion();
                        } else {
                            console.log('email correcto');
                            emailError.innerHTML = "";
                            usuarioEmail.style.borderColor = "";
                            emailFill = true;
                            modificacionesUsuario = true;
                            console.log('email: '+emailFill);
                            comprobacion();
                        }
                    }
                     
                // Validación Contraseña
                    this.usuario.password = null;
                    passwordError.innerHTML = "";
                    usuarioPassword.onkeyup = () => {
                        if(usuarioPassword.value === ''){
                            if(confirmarPassword.value === ''){
                                confirmPasswordError.innerHTML = "";
                                confirmarPassword.style.borderColor = "";
                                contraseñaFill = true;
                                confirmarContraseñaFill = true;
                                modificacionesUsuario = true;
                                comprobacion();
                            }
                            else{
                                contraseñaFill = false;
                                modificacionesUsuario = false;
                                console.log('Contraseña: '+contraseñaFill);
                                confirmarContraseñaFill = false;
                                console.log('Confirmar Contraseña: '+confirmarContraseñaFill);
                                comprobacion();
                            }
                        } 
                        else {
                            passwordError.innerHTML = "";
                            usuarioPassword.style.borderColor = "";
                        }
                        if(usuarioPassword.value) {
                            contraseñaFill = true;
                            modificacionesUsuario = true;
                            if(confirmarPassword.value) {
                                console.log('Valor pass: '+usuarioPassword.value);
                                usuarioPassword.style.borderColor = "";
                                passwordError.innerHTML = "";
                                confirmPasswordError.innerHTML = "";
                                confirmarPassword.value = '';
                                confirmarPassword.style.borderColor = "";
                                contraseñaFill = true;
                                modificacionesUsuario = true;
                                confirmarContraseñaFill = true;
                                console.log('Contraseña: '+contraseñaFill);
                                console.log('Confirmar Contraseña: '+confirmarContraseñaFill);
                                comprobacion();
                            } else {
                                confirmPasswordError.innerHTML = "Las contraseñas no coinciden";
                                confirmarPassword.style.borderColor = "red";
                                confirmarContraseñaFill = false;
                                modificacionesUsuario = false;
                                console.log('Contraseña: ' + contraseñaFill);
                                console.log('Confirmar Contraseña: '+confirmarContraseñaFill);
                                comprobacion();
                            }
                        }
                    }

                        // Validación Confirmar contraseña 
                        confirmPasswordError.innerHTML = "";   
                        confirmarPassword.onkeyup = () => {
                            if(usuarioPassword.value){
                                if(confirmarPassword.value === '') {
                                    modificacionesUsuario = false;
                                    confirmarContraseñaFill = false;
                                    console.log('Contraseña: ' + contraseñaFill);
                                    console.log('Confirmar Contraseña: '+confirmarContraseñaFill);
                                    comprobacion();
                                }
                                if(confirmarPassword.value != usuarioPassword.value){
                                    confirmPasswordError.innerHTML = "Las contraseñas no coinciden";
                                    confirmarPassword.style.borderColor = "red";
                                    confirmarContraseñaFill = false;
                                    modificacionesUsuario = false;
                                    console.log('Contraseña: ' + contraseñaFill);
                                    console.log('Confirmar Contraseña: '+confirmarContraseñaFill);
                                    comprobacion();
                                }
                                if(confirmarPassword.value == usuarioPassword.value) {
                                    confirmPasswordError.innerHTML = "";
                                    confirmarPassword.style.borderColor = "";
                                    confirmarContraseñaFill = true;
                                    modificacionesUsuario = false;
                                    console.log('Contraseña: ' + contraseñaFill);
                                    console.log('Confirmar Contraseña: '+confirmarContraseñaFill);
                                    comprobacion();
                                }
                            } else {
                                confirmPasswordError.innerHTML = "Primero debes ingresar la contraseña";
                                confirmarPassword.style.borderColor = "red";
                                confirmarContraseñaFill = false;
                                modificacionesUsuario = false;
                                comprobacion();
                            }
                        } 
                    // Validación: Calle
                    calleError.innerHTML = "";
                    usuarioCalle.onkeyup = () => {
                        const regExpCalle =/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+[0-9]+$/;
                        if(regExpCalle.test(usuarioCalle.value)){
                            calleError.innerHTML = "";
                            usuarioCalle.style.borderColor = "";
                            calleFill = true;
                            modificacionesUsuario = true;
                            comprobacion();
                        }
                        if(!regExpCalle.test(usuarioCalle.value)){
                            calleError.style.color = "red";
                            calleError.innerHTML = "El campo debe tener una cadena de caracteres y un número";
                            usuarioCalle.style.borderColor = "red";
                            calleFill = false;
                            modificacionesUsuario = false;
                            comprobacion();
                        }
                        if(usuarioCalle.value == ""){
                            calleError.style.color = "red";
                            calleError.innerHTML = "El campo no puede estar vacío";
                            usuarioCalle.style.borderColor = "red";
                            calleFill = false;
                            modificacionesUsuario = false;
                            comprobacion();
                        }
                    }
                    // Validación: Localidad
                    localidadError.innerHTML = "";
                    usuarioLocalidad.onkeyup = () => {
                        const regExpLocalidad =/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
                        if(regExpLocalidad.test(usuarioLocalidad.value)){
                            localidadError.innerHTML = "";
                            usuarioLocalidad.style.borderColor = "";
                            localidadFill = true;
                            modificacionesUsuario = true;
                            comprobacion();
                        }
                        if(!regExpLocalidad.test(usuarioLocalidad.value)){
                            localidadError.style.color = "red";
                            localidadError.innerHTML = "El campo debe tener una cadena de caracteres";
                            usuarioLocalidad.style.borderColor = "red";
                            localidadFill = false;
                            modificacionesUsuario = false;
                            comprobacion();
                        }
                        if(usuarioLocalidad.value == ""){
                            localidadError.style.color = "red";
                            localidadError.innerHTML = "El campo no puede estar vacío";
                            usuarioLocalidad.style.borderColor = "red";
                            localidadFill = false;
                            modificacionesUsuario = false;
                            comprobacion();
                        }
                    }
                    // Validación: Provincia
                    provinciaError.innerHTML = "";
                    usuarioProvincia.onkeyup = () => {
                        const regExpLocalidad =/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
                        if(regExpLocalidad.test(usuarioProvincia.value)){
                            provinciaError.innerHTML = "";
                            usuarioProvincia.style.borderColor = "";
                            provinciaFill = true;
                            modificacionesUsuario = true;
                            comprobacion();
                        }
                        if(!regExpLocalidad.test(usuarioProvincia.value)){
                            provinciaError.style.color = "red";
                            provinciaError.innerHTML = "El campo debe tener una cadena de caracteres";
                            usuarioProvincia.style.borderColor = "red";
                            provinciaFill = false;
                            modificacionesUsuario = false;
                            comprobacion();
                        }
                        if(usuarioProvincia.value == ""){
                            provinciaError.style.color = "red";
                            provinciaError.innerHTML = "El campo no puede estar vacío";
                            usuarioProvincia.style.borderColor = "red";
                            provinciaFill = false;
                            modificacionesUsuario = false;
                            comprobacion();
                        }
                    }
                            
                    // Validación: CP
                    cpError.innerHTML = "";
                    usuarioCp.onkeyup = () => {
                        const regExpCp =/^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;
                        if(regExpCp.test(usuarioCp.value)){
                            cpError.innerHTML = "";
                            usuarioCp.style.borderColor = "";
                            cpFill = true;
                            modificacionesUsuario = true;
                            comprobacion();
                        }
                        if(!regExpCp.test(usuarioCp.value)){
                            cpError.style.color = "red";
                            cpError.innerHTML = "El campo debe tener 5 numeros comprendidos entre 01000 y 52999";
                            usuarioCp.style.borderColor = "red";
                            cpFill = false;
                            modificacionesUsuario = false;
                            comprobacion();
                        }
                        if(usuarioCp.value == ""){
                            cpError.style.color = "red";
                            cpError.innerHTML = "El campo no puede estar vacío";
                            usuarioCp.style.borderColor = "red";
                            cpFill = false;
                            modificacionesUsuario = false;
                            comprobacion();
                        }
                    }

                    /* VALIDACIONES USUARIO JUGADOR */

                    // Validación Categoría
                    if(categoria) {
                        var valorCategoria = categoria.value; 
                    
                        categoria.onchange = () => {
                            if(categoria.value === valorCategoria){
                                okCategoria = false;
                                comprobacion();
                            } else {
                                okCategoria = true;
                                comprobacion();
                            }
                        }
                    }

                    // Validación Camiseta
                    if(camiseta) {
                        var valorCamiseta = camiseta.value; 

                        camiseta.onchange = () => {
                            if(camiseta.value === valorCamiseta){
                                okCamiseta = false;
                                comprobacion();
                            } else {
                                okCamiseta = true;
                                comprobacion();
                            }
                        }
                    }

                    // Validación Pantalon
                    if(pantalon) {
                        var valorPantalon = pantalon.value; 
                    
                        pantalon.onchange = () => {
                            if(pantalon.value === valorPantalon){
                                okPantalon = false;
                                comprobacion();
                            } else {
                                okPantalon = true;
                                comprobacion();
                            }
                        }
                    }

                    // Validación Medias
                    if(medias) {
                        var valorMedias = medias.value; 
                    
                        medias.onchange = () => {
                            if(medias.value === valorMedias){
                                okMedias = false;
                                comprobacion();
                            } else {
                                okMedias = true;
                                comprobacion();
                            }
                        }
                    }

                    // Validación Abrigo
                    if(abrigo) {
                        var valorAbrigo = abrigo.value; 
                    
                        abrigo.onchange = () => {
                            if(abrigo.value === valorAbrigo){
                                okAbrigo = false;
                                comprobacion();
                            } else {
                                okAbrigo = true;
                                comprobacion();
                            }
                        }
                    }

                    // Validación Pago jugador
                    if(pagoJugador) {
                        var jugadorPago = pagoJugador.value; 
                    
                        pagoJugador.onchange = () => {
                            if(pagoJugador.value === jugadorPago){
                                okPagoJugador = false;
                                comprobacion();
                            } else {
                                okPagoJugador = true;
                                comprobacion();
                            }
                        }
                    }

                    /* VALIDACIONES USUARIO SOCIO */

                    // Validación Pago Socio
                    if(pagoSocio) {
                        var socioPago = pagoSocio.value; 
                    
                        pagoSocio.onchange = () => {
                            if(pagoSocio.value === socioPago){
                                okPagoSocio = false;
                                comprobacion();
                            } else {
                                okPagoSocio = true;
                                comprobacion();
                            }
                        }
                    }

                    /* VALIDACIONES USUARIO ENTRENADOR */

                    if(entrenador){
                        botonEntrenador.disabled = true;

                        entrenador.onchange = () =>{
                            if(entrenador.value){
                                console.log('existe');
                                botonEntrenador.disabled = false;
                            } else {
                                botonEntrenador.disabled = true;
                                console.log('No existe');
                            }
                        }

                    }

                })
            },  
            cancelarEdicion(){
                if (location.reload(true)) {
                    this.editar = false;
                    this.parrafo = true;
                    this.mensajeContraseña = false;
                }

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