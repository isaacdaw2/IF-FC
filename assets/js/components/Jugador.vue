<template>
    <div class="mt-5 text-center">
        <h1>Rellena este formulario</h1>
        <h2>¡y únete a nuestro equipo!</h2>  

        <b-container class="mt-5">
            <!-- línea 1: categoría -->
            <b-form-row class="mb-3">
                <b-col no-gutters>
                    <label for="categorias">Categoría:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="categoria" id="categoria" :options="categorias"></b-form-select>
                </b-col>
            </b-form-row>

            <!-- línea 2: talla de camiseta -->
            <b-form-row class="mb-3">
                <b-col>
                    <label for="tallaCamiseta">Talla de camiseta:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="tallaCamiseta" id="tallaCamiseta" :options="tallas"></b-form-select>
                </b-col>
            </b-form-row>

            <!-- línea 3: talla de pantalón -->
            <b-form-row class="mb-3">
                <b-col>
                    <label for="tallaPantalon">Talla de pantalón:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="tallaPantalon" id="tallaPantalon" :options="tallas"></b-form-select>
                </b-col>
            </b-form-row>

            <!-- línea 4: talla de medias -->
            <b-form-row class="mb-3">
                <b-col>
                    <label for="tallaMedias">Talla de medias:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="tallaMedias" id="tallaMedias" :options="tallas"></b-form-select>
                </b-col>
            </b-form-row>

            <!-- línea 5: talla de abrigo -->
            <b-form-row class="mb-3">
                <b-col>
                    <label for="tallaAbrigo">Talla de abrigo:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="tallaAbrigo" id="tallaAbrigo" :options="tallas"></b-form-select>
                </b-col>
            </b-form-row>

            <!-- línea 6: método de pago -->
            <b-form-row class="mb-3">
                <b-col>
                    <label for="metodoPago">Método de pago:</label>
                </b-col>
                <b-col>
                    <b-form-select v-model="metodoPago" id="metodoPago" :options="pago"></b-form-select>
                </b-col>
            </b-form-row>

            <!-- línea 7: enviar -->
            <b-form-row class="mt-2">
                <b-col>
                    <b-button variant="primary" id="enviarJugador">Enviar</b-button>                 
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
                {value: 'Transferencia', text: 'Transferencia bancaria'}
            ]
        }
    }
}
</script>