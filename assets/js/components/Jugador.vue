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
                    <b-form-select v-model="categoria" id="categoria" :options="categorias"></b-form-select>
                </b-col>
            </b-form-row>

            <!-- línea 2: talla de camiseta -->
            <b-form-row class="mb-3" v-if="!dismissCountDown">
                <b-col>
                    <label for="tallaCamiseta">Talla de camiseta:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="tallaCamiseta" id="tallaCamiseta" :options="tallas"></b-form-select>
                </b-col>
            </b-form-row>

            <!-- línea 3: talla de pantalón -->
            <b-form-row class="mb-3" v-if="!dismissCountDown">
                <b-col>
                    <label for="tallaPantalon">Talla de pantalón:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="tallaPantalon" id="tallaPantalon" :options="tallas"></b-form-select>
                </b-col>
            </b-form-row>

            <!-- línea 4: talla de medias -->
            <b-form-row class="mb-3" v-if="!dismissCountDown">
                <b-col>
                    <label for="tallaMedias">Talla de medias:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="tallaMedias" id="tallaMedias" :options="tallas"></b-form-select>
                </b-col>
            </b-form-row>

            <!-- línea 5: talla de abrigo -->
            <b-form-row class="mb-3" v-if="!dismissCountDown">
                <b-col>
                    <label for="tallaAbrigo">Talla de abrigo:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="tallaAbrigo" id="tallaAbrigo" :options="tallas"></b-form-select>
                </b-col>
            </b-form-row>

            <!-- línea 6: método de pago -->
            <b-form-row class="mb-3" v-if="!dismissCountDown">
                <b-col>
                    <label for="metodoPago">Método de pago:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="metodoPago" id="metodoPago" :options="pago"></b-form-select>
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
                {value: 'Tarjeta', text: 'Tarjeta crédito/débito'},
                {value: 'Domiciliación', text: 'Domiciliación bancaria'}
            ]
        }
    },
    methods:{
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        inscribirJugador(EleccionPagoJugador, EleccionCategoria, EleccionTallaCamiseta, EleccionTallaPantalon, EleccionTallaMedias, EleccionTallaAbrigo){
            var ruta = '/pago-jugadores'
            $.ajax({
                type: 'POST',
                url: ruta,
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
        }
    }
}
</script>