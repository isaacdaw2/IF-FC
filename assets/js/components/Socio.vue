<template>
    <div class="mt-5 text-center">
        <h1>Contigo seguimos creciendo</h1>
        <h2>¡Hazte socio!</h2>

        <b-row class="mt-5">
            <b-col>
                <b-card>
                    <b-card-img src="/img/Socios.jpg"></b-card-img>
                        
                        <b-row class="mt-3">
                            <b-col>
                                <label for="metodoPago">Método de pago:</label>
                            </b-col>
                            <b-col>
                                <b-form-select v-model="metodoPago" :options="pago" id="pagoSocios"></b-form-select>
                            </b-col>
                        </b-row>

                          <!-- boton enviar -->
                    <b-row class="mt-3">
                        <b-col>
                            <b-button variant="primary" id="enviarSocios" @click="pagar(metodoPago)">Enviar</b-button>                 
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
             pago:[
                {value: null, text: 'Seleccione un método de pago'},
                {value: 'Paypal', text: 'Paypal'},
                {value: 'Tarjeta', text: 'Tarjeta crédito/débito'},
                {value: 'Transferencia', text: 'Transferencia bancaria'}
            ]
        }
    },
    methods:{
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
        }
    }
}
</script>