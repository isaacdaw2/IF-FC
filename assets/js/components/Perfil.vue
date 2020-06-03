<template>
    <div class="mt-5 mb-5 text-center">
        <b-container>
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
                style="max-width: 40rem;"
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
                        <span id="nombreError"></span>
                    </b-col>
                </b-row>

                <!-- Edición y validación Apellidos del usuario -->
                <b-row class="mb-2" v-if="editar">
                    <b-col>
                        <strong class="text-dark">Apellidos:</strong>
                    </b-col>
                    <b-col>
                        <b-form-input v-model="usuario.apellidos" id="usuarioApellidos" placeholder="Introduce aquí tus apellidos"></b-form-input>
                        <span id="apellidosError"></span>
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
                        <span id="emailError"></span>
                    </b-col>
                </b-row>

                <!-- Edición y validación Contraseña del usuario -->
                <b-row class="mb-2" v-if="editar">
                    <b-col>
                        <strong class="text-dark">Contraseña:</strong>
                    </b-col>
                     <b-col>
                        <b-form-input type="password" v-model="usuario.password" id="usuarioPassword" placeholder="Introduce aquí una contraseña"></b-form-input>
                        <span id="passwordError"></span>
                    </b-col>
                </b-row>

                <!-- Edición y validación Confirmar contraseña del usuario -->
                <b-row class="mb-2" v-if="editar">
                    <b-col>
                        <strong class="text-dark">Confirmar contraseña:</strong>
                    </b-col>
                     <b-col>
                        <b-form-input type="password" id="confirmPass" placeholder="Repite la contraseña"></b-form-input>
                        <span id="confirmPasswordError"></span>
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
                        <span id="dniError"></span>
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
                        <span id="calleError"></span>
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
                        <span id="localidadError"></span>
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
                        <span id="provinciaError"></span>
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
                        <span id="cpError"></span>
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
                        <b-button variant="outline-primary" v-if="!editar" id="edicion" @click="editarPerfil">Editar</b-button>
                        <b-button variant="outline-danger" v-if="!editar" @click="eliminarPerfil(usuario.id)">Eliminar cuenta</b-button>
                        <b-button variant="outline-success" v-if="editar" id="saveChanges" @click="actualizarPerfil">Actualizar</b-button>
                        <b-button variant="outline-danger" v-if="editar" @click="cancelarEdicion">Cancelar</b-button>
                    </b-col>
                </b-row>                
            </b-card>

            <!-- Mensaje eliminación jugador, socio o entrenador -->
            <small v-if="parrafo">Si eres jugador/a, soci@ o entrenador/a y deseas tramitar la baja, pulsa antes el botón editar.</small>

            <!-- Copyright -->

        </b-container>
            <div class="footer">
                <p class="mt-5 text-center" v-if="copyright">&copy;2020 IF-ormáticos FC</p>
            </div>
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
            contraseñaGuardada: '',
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
                this.fecha = this.usuario.fechaNacimiento.date.substring(0,10);                

                this.$nextTick(function () {
                    // Puntero body
                    document.querySelector('body').style.cursor = "pointer";

                    // Variables del formulario
                    const usuarioNombre = document.getElementById("nombre");
                    const usuarioApellidos = document.getElementById("usuarioApellidos");
                    const usuarioEmail = document.getElementById("usuarioEmail");
                    const usuarioPassword = document.getElementById("usuarioPassword");
                    const confirmarPassword = document.getElementById("confirmPass");
                    const usuarioDni = document.getElementById("usuarioDni");
                    const usuarioCalle = document.getElementById("usuarioCalle");
                    const usuarioLocalidad = document.getElementById("usuarioLocalidad");
                    const usuarioProvincia = document.getElementById("usuarioProvincia");
                    const usuarioCp = document.getElementById("usuarioCp");
                    const showPasswords = document.getElementById("showPasswords");
                    const botonSave = document.getElementById("saveChanges");

                    // Errores de las variables
                    const nombreError = document.getElementById("nombreError");
                    const apellidosError = document.getElementById("apellidosError");
                    const emailError = document.getElementById("emailError");
                    const passwordError = document.getElementById("passwordError");
                    const confirmPasswordError = document.getElementById("confirmPasswordError");
                    const dniError = document.getElementById("dniError");
                    const calleError = document.getElementById("calleError");
                    const localidadError = document.getElementById("localidadError");
                    const provinciaError = document.getElementById("provinciaError");
                    const cpError = document.getElementById("cpError");

                    console.log(this.usuario.password);
                    this.usuario.password = null;
                    console.log(this.usuario.password);

                    // Validación: mostrar contraseña
                    if(confirmarPassword.value == "") {
                        saveChanges.style.cursor = "not-allowed";
                        saveChanges.disabled = true;
                    } else {
                        saveChanges.style.cursor = "pointer";
                        saveChanges.disabled = false;
                    }
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
                    
                    // Validación: Nombre
                    nombreError.innerHTML = "";
                    usuarioNombre.onkeyup = () => {
                        const regExpNombre =/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

                        if(regExpNombre.test(usuarioNombre.value)){
                            nombreError.innerHTML = "";
                            usuarioNombre.style.borderColor = "";
                            saveChanges.style.cursor = "pointer";
                            saveChanges.disabled = false;
                        }
                        if(!regExpNombre.test(usuarioNombre.value)){
                            nombreError.style.color = "red";
                            nombreError.innerHTML = "El campo debe tener una cadena de caracteres";
                            usuarioNombre.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                            
                        }
                        if(usuarioNombre.value == ""){
                            nombreError.style.color = "red";
                            nombreError.innerHTML = "El campo no puede estar vacío";
                            usuarioNombre.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                        }
                    }

                    // Validación: Apellidos
                    apellidosError.innerHTML = "";
                    usuarioApellidos.onkeyup = () => {
                        const regExpApellidos =/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
                                    
                        if(regExpApellidos.test(usuarioApellidos.value)){
                            apellidosError.innerHTML = "";
                            usuarioApellidos.style.borderColor = "";
                            saveChanges.style.cursor = "pointer";
                            saveChanges.disabled = false;
                        }
                        if(!regExpApellidos.test(usuarioApellidos.value)){
                            apellidosError.style.color = "red";
                            apellidosError.innerHTML = "El campo debe tener una cadena de caracteres";
                            usuarioApellidos.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                        }
                        if(usuarioApellidos.value == ""){
                            apellidosError.style.color = "red";
                            apellidosError.innerHTML = "El campo no puede estar vacío";
                            usuarioApellidos.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                        }
                    }

                    // Validación: Dni                        
                    dniError.innerHTML = "";
                    usuarioDni.onkeyup = () => {
                        const regExpDni =/^[0-9]{8}[A-Za-z]$/i;
                        if(regExpDni.test(usuarioDni.value)){
                            dniError.innerHTML = "";
                            usuarioDni.style.borderColor = "";
                            saveChanges.style.cursor = "pointer";
                            saveChanges.disabled = false;
                        }
                        if(!regExpDni.test(usuarioDni.value)){
                            dniError.style.color = "red";
                            dniError.innerHTML = "El campo debe contener 8 números y 1 letra";
                            usuarioDni.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                        }
                        if(usuarioDni.value == ""){
                            dniError.style.color = "red";
                            dniError.innerHTML = "El campo no puede estar vacío";
                            usuarioDni.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                        }
                    }
                    
                    // Validación: Email
                    emailError.innerHTML = "";
                    usuarioEmail.onkeyup = () => {
                        const regExpEmail =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
                        if(regExpEmail.test(usuarioEmail.value)){
                            emailError.innerHTML = "";
                            usuarioEmail.style.borderColor = "";
                            saveChanges.style.cursor = "pointer";
                            saveChanges.disabled = false;
                        }
                        if(!regExpEmail.test(usuarioEmail.value)){
                            emailError.style.color = "red";
                            emailError.innerHTML = "El campo debe tener formato email";
                            usuarioEmail.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                        }
                        if(usuarioEmail.value == ""){
                            emailError.style.color = "red";
                            emailError.innerHTML = "El campo no puede estar vacío";
                            usuarioEmail.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                        }
                    }
                     
                    // Validación: Confirmar contraseña 
                    confirmPasswordError.innerHTML = "";
                    confirmarPassword.onkeyup = () => {
                        if(confirmarPassword.value != usuarioPassword.value){
                            confirmPasswordError.style.color = "red";
                            confirmPasswordError.innerHTML = "Las contraseñas no coinciden";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                            confirmarPassword.style.borderColor = "red";
                        } else {
                            confirmPasswordError.innerHTML = "";
                            saveChanges.style.cursor = "pointer";
                            saveChanges.disabled = false;
                            confirmarPassword.style.borderColor = "";
                        }
                    }

                    // Validación: Calle
                    calleError.innerHTML = "";
                    usuarioCalle.onkeyup = () => {
                        const regExpCalle =/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+[0-9]$/;
                        if(regExpCalle.test(usuarioCalle.value)){
                            calleError.innerHTML = "";
                            usuarioCalle.style.borderColor = "";
                            saveChanges.style.cursor = "pointer";
                            saveChanges.disabled = false;
                        }
                        if(!regExpCalle.test(usuarioCalle.value)){
                            calleError.style.color = "red";
                            calleError.innerHTML = "El campo debe tener una cadena de caracteres y un número";
                            usuarioCalle.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                        }
                        if(usuarioCalle.value == ""){
                            calleError.style.color = "red";
                            calleError.innerHTML = "El campo no puede estar vacío";
                            usuarioCalle.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                        }
                    }

                    // Validación: Localidad
                    localidadError.innerHTML = "";
                    usuarioLocalidad.onkeyup = () => {
                        const regExpLocalidad =/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
                        if(regExpLocalidad.test(usuarioLocalidad.value)){
                            localidadError.innerHTML = "";
                            usuarioLocalidad.style.borderColor = "";
                            saveChanges.style.cursor = "pointer";
                            saveChanges.disabled = false;
                        }
                        if(!regExpLocalidad.test(usuarioLocalidad.value)){
                            localidadError.style.color = "red";
                            localidadError.innerHTML = "El campo debe tener una cadena de caracteres";
                            usuarioLocalidad.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                        }
                        if(usuarioLocalidad.value == ""){
                            localidadError.style.color = "red";
                            localidadError.innerHTML = "El campo no puede estar vacío";
                            usuarioLocalidad.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                        }
                    }

                    // Validación: Provincia
                    provinciaError.innerHTML = "";
                    usuarioProvincia.onkeyup = () => {
                        const regExpLocalidad =/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
                        if(regExpLocalidad.test(usuarioProvincia.value)){
                            provinciaError.innerHTML = "";
                            usuarioProvincia.style.borderColor = "";
                            saveChanges.style.cursor = "pointer";
                            saveChanges.disabled = false;
                        }
                        if(!regExpLocalidad.test(usuarioProvincia.value)){
                            provinciaError.style.color = "red";
                            provinciaError.innerHTML = "El campo debe tener una cadena de caracteres";
                            usuarioProvincia.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                        }
                        if(usuarioProvincia.value == ""){
                            provinciaError.style.color = "red";
                            provinciaError.innerHTML = "El campo no puede estar vacío";
                            usuarioProvincia.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                        }
                    }
                            
                    // Validación: CP
                    cpError.innerHTML = "";
                    usuarioCp.onkeyup = () => {
                        const regExpCp =/^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;
                        if(regExpCp.test(usuarioCp.value)){
                            cpError.innerHTML = "";
                            usuarioCp.style.borderColor = "";
                            saveChanges.style.cursor = "pointer";
                            saveChanges.disabled = false;
                        }
                        if(!regExpCp.test(usuarioCp.value)){
                            cpError.style.color = "red";
                            cpError.innerHTML = "El campo debe tener 5 numeros comprendidos entre 01000 y 52999";
                            usuarioCp.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                        }
                        if(usuarioCp.value == ""){
                            cpError.style.color = "red";
                            cpError.innerHTML = "El campo no puede estar vacío";
                            usuarioCp.style.borderColor = "red";
                            saveChanges.style.cursor = "not-allowed";
                            saveChanges.disabled = true;
                        }
                    }
                })

            },  
            cancelarEdicion(){
                this.editar = false;
                this.parrafo = true;

                this.$nextTick(function () {
                    document.getElementById('edicion').disabled = false;
                    document.getElementById('edicion').style.cursor = 'pointer';
                })
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