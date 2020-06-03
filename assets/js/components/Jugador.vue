<template>
    <div class="mt-5 text-center">
        <h1>Rellena este formulario</h1>
        <h2>¡y únete a nuestro equipo!</h2>  

        <b-container class="mt-5">
            <!-- línea 1: categoría -->
            <b-form-row class="mb-3" v-if="!dismissCountDown">
                <b-col no-gutters>
                    <label for="categorias">Categoría:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="categoria" id="validarCategoria" :options="categorias"></b-form-select>
                    <span id="categoriaError"></span>
                </b-col>
            </b-form-row>

            <!-- línea 2: talla de camiseta -->
            <b-form-row class="mb-3" v-if="!dismissCountDown">
                <b-col>
                    <label for="tallaCamiseta">Talla de camiseta:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="tallaCamiseta" id="validarCamiseta" :options="tallas"></b-form-select>
                    <span id="camisetaError"></span>
                </b-col>
            </b-form-row>

            <!-- línea 3: talla de pantalón -->
            <b-form-row class="mb-3" v-if="!dismissCountDown">
                <b-col>
                    <label for="tallaPantalon">Talla de pantalón:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="tallaPantalon" id="validarPantalon" :options="tallas"></b-form-select>
                    <span id="pantalonError"></span>
                </b-col>
            </b-form-row>

            <!-- línea 4: talla de medias -->
            <b-form-row class="mb-3" v-if="!dismissCountDown">
                <b-col>
                    <label for="tallaMedias">Talla de medias:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="tallaMedias" id="validarMedias" :options="tallas"></b-form-select>
                    <span id="mediasError"></span>
                </b-col>
            </b-form-row>

            <!-- línea 5: talla de abrigo -->
            <b-form-row class="mb-3" v-if="!dismissCountDown">
                <b-col>
                    <label for="tallaAbrigo">Talla de abrigo:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="tallaAbrigo" id="validarAbrigo" :options="tallas"></b-form-select>
                    <span id="abrigoError"></span>
                </b-col>
            </b-form-row>

            <!-- línea 6: método de pago -->
            <b-form-row class="mb-3" v-if="!dismissCountDown">
                <b-col>
                    <label for="metodoPago">Método de pago:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="metodoPago" id="validarPago" :options="pago"></b-form-select>
                    <span id="pagoError"></span>
                </b-col>
            </b-form-row>

            <!-- línea 7: Alerta animada -->
            <b-row class="mt-3 justify-content-center"> 
                <b-alert
                :show="dismissCountDown"
                dismissible
                variant="success"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
                >
                <p>Enviando información: {{ dismissCountDown }} segundos...</p>
                <b-progress
                    variant="warning"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px"
                ></b-progress>
                </b-alert>
            </b-row>

            <!-- línea 8: enviar -->
            <b-form-row class="mt-2">
                <b-col>
                    <b-button variant="primary" id="botonJugador" @click="inscribirJugador(metodoPago, categoria, tallaCamiseta, tallaPantalon, tallaMedias, tallaAbrigo)">Enviar</b-button>                 
                </b-col>                    
            </b-form-row>

            <!-- Copyright -->
            <p class="mt-5 text-center">&copy;2020 IF-ormáticos FC</p>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Jugador',
    data(){
        return {
            categoria: null,
            tallaCamiseta: null,
            tallaPantalon: null,
            tallaMedias: null,
            tallaAbrigo: null,
            metodoPago: null,
            dismissSecs: 3,
            dismissCountDown: 0,
            showDismissibleAlert: false,
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
        }
    },
    methods: {
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        inscribirJugador(EleccionPagoJugador, EleccionCategoria, EleccionTallaCamiseta, EleccionTallaPantalon, EleccionTallaMedias, EleccionTallaAbrigo){

            // Variables del formulario
            var categoria = document.getElementById("validarCategoria");
            var camiseta = document.getElementById("validarCamiseta");
            var pantalon = document.getElementById("validarPantalon");
            var medias = document.getElementById("validarMedias");
            var abrigo = document.getElementById("validarAbrigo");
            var pago = document.getElementById("validarPago");
            var enviar = document.getElementById("botonJugador");

            // Errores de las variables
            var categoriaError = document.getElementById("categoriaError");
            var camisetaError = document.getElementById("camisetaError");
            var pantalonError = document.getElementById("pantalonError");
            var mediasError = document.getElementById("mediasError");
            var abrigoError = document.getElementById("abrigoError");
            var pagoError = document.getElementById("pagoError");

            // Ok validaciones
            var okCategoria = false;
            var okCamiseta = false;
            var okPantalon = false;
            var okMedias = false;
            var okAbrigo = false;
            var okPago = false;


            // Validación Categoría
            if(!categoria.value){
                categoria.style.borderColor = "red";
                categoriaError.style.color = "red";
                categoriaError.innerHTML = "Debes seleccionar una categoría";
            } else {
                    okCategoria = true;
            }
            categoria.onchange = () => {
                if(categoria.value !== ''){
                    categoria.style.borderColor = "green";
                    categoriaError.innerHTML = "";
                    okCategoria = true;
                } else {
                    okCategoria = false;
                }
            }

            // Validación Camiseta
            if(!camiseta.value){
                camiseta.style.borderColor = "red";
                camisetaError.style.color = "red";
                camisetaError.innerHTML = "Debes seleccionar una talla de camiseta";
            } else {
                okCamiseta = true;
            }
            camiseta.onchange = () => {
                if(camiseta.value !== ''){
                    camiseta.style.borderColor = "green";
                    camisetaError.innerHTML = "";
                    okCamiseta = true;
                } else {
                    okCamiseta = false;
                }
            }
            
            // Validación Pantalón
            if(!pantalon.value){
                pantalon.style.borderColor = "red";
                pantalonError.style.color = "red";
                pantalonError.innerHTML = "Debes seleccionar una talla de pantalón";
            } else {
                okPantalon = true;
            }
            pantalon.onchange = () => {
                if(pantalon.value !== ''){
                    pantalon.style.borderColor = "green";
                    pantalonError.innerHTML = "";
                    okPantalon = true;
                } else {
                    okPantalon = false;
                }
            }

            // Validación Medias
            if(!medias.value){
                medias.style.borderColor = "red";
                mediasError.style.color = "red";
                mediasError.innerHTML = "Debes seleccionar una talla de medias";
            } else {
                okMedias = true;
            }
            medias.onchange = () => {
                if(medias.value !== ''){
                    medias.style.borderColor = "green";
                    mediasError.innerHTML = "";
                    okMedias = true;
                } else {
                    okMedias = false;
                }
            }

            // Validación Abrigo
            if(!abrigo.value){
                abrigo.style.borderColor = "red";
                abrigoError.style.color = "red";
                abrigoError.innerHTML = "Debes seleccionar una talla de abrigo";
            } else {
                okAbrigo = true;
            }
            abrigo.onchange = () => {
                if(abrigo.value !== ''){
                    abrigo.style.borderColor = "green";
                    abrigoError.innerHTML = "";
                    okAbrigo = true;
                } else {
                    okAbrigo = false;
                }
            }

            // Validación Método de pago
            if(!pago.value ){
                pago.style.borderColor = "red";
                pagoError.style.color = "red";
                pagoError.innerHTML = "Debes seleccionar un método de pago";
            } else {
                okPago = true;
            }
            pago.onchange = () => {
                if(pago.value !== ''){
                    pago.style.borderColor = "green";
                    pagoError.innerHTML = "";
                    okPago = true;
                } else {
                    okPago = false;
                }
            }

            if(okCategoria && okCamiseta && okPantalon && okMedias && okAbrigo && okPago){
                $.ajax({
                    type: 'POST',
                    url: '/pago-jugadores',
                    data: ({pagoJugador: EleccionPagoJugador, 
                            categoria: EleccionCategoria,
                            tallaCamiseta: EleccionTallaCamiseta,
                            tallaPantalon: EleccionTallaPantalon,
                            tallaMedias: EleccionTallaMedias,
                            tallaAbrigo: EleccionTallaAbrigo
                            }),
                    async: true,
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                    }
                })
                document.getElementById('botonJugador').style.display = 'none';
                this.dismissCountDown = this.dismissSecs
                setTimeout( () => this.$router.push({ name: 'home'}), 3000);
            } else {
                console.log('No puedo ejecutar aún. '+
                'Categoria: '+okCategoria+
                ' Camiseta: '+okCamiseta+
                ' Pantalón: '+okPantalon+
                ' Medias: '+okMedias+
                ' Abrigo: '+okAbrigo+
                ' Pago: '+okPago);
            }           
        }
    }
}
</script>