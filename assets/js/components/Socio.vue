<template>
    <div class="mt-5 mb-5 text-center container">
        <h1>Contigo seguimos creciendo</h1>
        <h2>¡Hazte socio!</h2>

        <b-row class="mt-5">
            <b-col>
                <b-card>
                    <b-card-img src="/img/Socios.jpg"></b-card-img>

                    <!-- Métido de pago -->                        
                    <b-row class="mt-3" v-if="!dismissCountDown">
                        <b-col>
                            <label for="metodoPago">Método de pago:</label>
                        </b-col>
                        <b-col>
                            <b-form-select v-model="metodoPago" :options="pago" id="validarPagoSocio"></b-form-select>
                            <span id="pagoSocioError"></span>
                        </b-col>
                    </b-row>
                    
                    <!-- Alert animada -->
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

                          <!-- boton enviar -->
                    <b-row class="mt-3">
                        <b-col>
                            <b-button variant="primary" id="botonSocios" @click="pagar(metodoPago)">Enviar</b-button>                 
                        </b-col>                    
                    </b-row>
                </b-card>
            </b-col>            
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'Socio',
    data(){
        return {
            metodoPago: null,
            dismissSecs: 3,
            dismissCountDown: 0,
            showDismissibleAlert: false,
            footer: document.getElementById("footer"),
             pago:[
                {value: null, text: 'Seleccione un método de pago'},
                {value: 'Paypal', text: 'Paypal'},
                {value: 'Tarjeta crédito/débito', text: 'Tarjeta crédito/débito'},
                {value: 'Domiciliación bancaria', text: 'Domiciliación bancaria'}
            ]
        }
    },
    mounted() {
        footer.style.display = 'block';
    },
    methods:{
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        pagar(tipoPago){
            var pago = document.getElementById("validarPagoSocio");
            var pagoError = document.getElementById("pagoSocioError");
            var enviar = document.getElementById("botonSocios");
            var okPagoSocio = false;

            // Validación Método de pago
            if(!pago.value ){
                pago.style.borderColor = "red";
                pagoError.style.color = "red";
                pagoError.innerHTML = "Debes seleccionar un método de pago";
            } else {
                okPagoSocio = true;
            }
            pago.onchange = () => {
                if(pago.value !== ''){
                    pago.style.borderColor = "green";
                    pagoError.innerHTML = "";
                    okPagoSocio = true;
                } else {
                    okPagoSocio = false;
                }
            }

            if(okPagoSocio){
                var ruta = '/pago-socios'
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
                document.getElementById('botonSocios').style.display = 'none';
                this.dismissCountDown = this.dismissSecs
                setTimeout( () => this.$router.push({ name: 'home'}), 2000);           
            } else {
                console.log('No puedo ejecutame porque el pago está: '+okPagoSocio);
            }
        }
    }
}
</script>