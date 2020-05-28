<template>
    <div class="mt-5 mb-5 text-center container">
        <h1>¿Tienes el título de entrenador?</h1>
        <h2>Envíanoslo y dirige a alguno de nuestros equipos</h2>
        
        <b-img src="/img/entrenador.png" fluid></b-img>        
        
        <!-- Seleccionar archivo -->
        <b-row class="mt-3" v-if="!dismissCountDown">
            <b-form-file
                v-model="file"
                :state="Boolean(file)"
                placeholder="Elija un archivo o desplácelo aquí..."
                drop-placeholder="Soltar archivo aquí..."
                browse-text="Elegir"
                id="file" name="file"                
            ></b-form-file>
        </b-row>
        <b-row class="mt-3 justify-content-center"> 
            <b-alert
            :show="dismissCountDown"
            dismissible
            variant="success"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
            >
            <p>Enviando archivo: {{ dismissCountDown }} segundos...</p>
            <b-progress
                variant="warning"
                :max="dismissSecs"
                :value="dismissCountDown"
                height="4px"
            ></b-progress>
            </b-alert>
        </b-row>

        <!-- Botón de enviar-->
        <b-row class="mt-3">
            <b-col>
                <b-button variant="success" id="botonEntrenador" @click="enviarTitulo">Enviar</b-button>
            </b-col>
        </b-row>

        <!-- Copyright -->
        <p class="mt-5 text-center">&copy;2020 IF-ormáticos FC</p>
    </div>
</template>

<script>
export default {
    name: 'Entrenador',
    data() {
      return {
        file: [],
        dismissSecs: 3,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    methods:{
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        enviarTitulo(){
            var ruta = '/envio-titulo'
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
            document.getElementById('botonEntrenador').style.display = 'none';
            this.dismissCountDown = this.dismissSecs;
            setTimeout( () => this.$router.push({ name: 'home'}), 3010);         
        }
    }
}
</script>