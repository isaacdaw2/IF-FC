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
                            <b-form-select v-model="metodoPago" :options="pago" id="pagoSocios"></b-form-select>
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
        pagar(tipoPago){
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
            setTimeout( () => this.$router.push({ name: 'home'}), 3000);           
        }
    }
}
</script>