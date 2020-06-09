<template>
    <div class="mt-5 mb-5 text-center container">
        <h1>¿Tienes el título de entrenador?</h1>
        <h2>Envíanoslo y dirige a alguno de nuestros equipos</h2>
        
        <b-img src="/img/entrenador.png" fluid></b-img>        
        
        <!-- Seleccionar archivo -->
        <b-row class="mt-3" v-if="!dismissCountDown">
            <b-col>
                <b-form-file
                    v-model="file"
                    :state="Boolean(file)"
                    placeholder="Elija un archivo o desplácelo aquí..."
                    drop-placeholder="Soltar archivo aquí..."
                    browse-text="Elegir"
                    id="file" name="file"
                    @change="archivo"                
                ></b-form-file>
                <span id="entrenadorError"></span>
            </b-col>
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
    </div>
</template>

<script>
export default {
    name: 'Entrenador',
    data() {
      return {
        file: undefined,
        okEntrenador: false,
        dismissSecs: 3,
        dismissCountDown: 0,
        footer: document.getElementById("footer"),
        showDismissibleAlert: false
      }
    },
    mounted() {
        footer.style.display = 'block';
    },
    methods:{
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
        },
        enviarTitulo(){
            
            var file = document.getElementById("file");

            if(document.getElementById('file').files[0]){
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
                this.dismissCountDown = this.dismissSecs;
                setTimeout( () => this.$router.push({ name: 'home'}), 3010); 
                document.getElementById('botonEntrenador').style.display = 'none';
            }
                    
        },
        archivo() {
            var enviar = document.getElementById("botonEntrenador");
            var entrenadorError = document.getElementById("entrenadorError");
                if (!Boolean(this.file)) {
                entrenadorError.style.color = "green";
                entrenadorError.innerHTML = "Archivo adjuntado correctamente";
            } else {
                entrenadorError.style.color = "red";
                entrenadorError.innerHTML = "Debes seleccionar un archivo";
                console.log('NO Existe');
            }
            console.log(this.file);
            console.log(Boolean(this.file));
        }
    }
}
</script>