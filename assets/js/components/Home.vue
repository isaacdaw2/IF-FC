<template>
    <div id="home">
        <!-- Cabecera slides -->
    <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        img-width="1024"
        img-height="480">
        <b-carousel-slide
            caption="Bienvenid@ a nuestra web"
            img-src="https://www.malagahoy.es/2019/10/31/provincia/Campo-futbol-Campillos-trabajos-sustitucion_1405670131_112013217_667x375.jpg"></b-carousel-slide>
        <b-carousel-slide
            caption="Comparte nuestra pasión"
            img-src="https://www.granadadigital.es/wp-content/uploads/2018/04/WhatsApp-Image-2018-04-07-at-09.42.36-1.jpeg"></b-carousel-slide>
        <b-carousel-slide
            caption="Aquí encontrarás las noticias del club"
            img-src="https://est.zetaestaticos.com/mediterraneo/img/noticias/1/049/1049799_1.jpg"></b-carousel-slide>
        <b-carousel-slide
            caption="Resultados"
            img-src="https://i.promecal.es/IMG/2020/6F8E0859-C67D-36A7-242011759A0DC7DC.JPG"></b-carousel-slide>
    </b-carousel>

        <!-- cards con noticias -->
        <div class="mt-3 mb-3 p-3">
        <!-- Primera línea de cards -->
            <div>
                <b-card-group deck="deck">
                    <b-card
                        bg-variant="primary"
                        text-variant="white"
                        header="Historia del club"
                        class="text-center"
                        href="#">
                        <b-card-text><a href="#" class="text-white">Conoce nuestra historia</a></b-card-text>                                
                    </b-card>

                    <b-card
                        bg-variant="secondary"
                        text-variant="white"
                        header="Instalaciones"
                        class="text-center">
                        <b-card-text><a href="#" class="text-white">Contempla nuestras instalaciones</a></b-card-text>                
                    </b-card>

                    <b-card
                        bg-variant="success"
                        text-variant="white"
                        header="Plantillas"
                        class="text-center">
                        <b-card-text><a href="#" class="text-white">Conoce nuestras plantillas</a></b-card-text>                
                    </b-card>
                </b-card-group>
            </div>

            <!-- Segunda línea de cards -->
        <div class="mt-3">
            <b-card-group deck="deck">
                <b-card
                    bg-variant="info"
                    text-variant="white"
                    header="Clasificación"
                    class="text-center">
                    <b-card-text><a href="#" class="text-white">Observa nuestra clasificación en la tabla</a></b-card-text>
                </b-card>

                <b-card
                    bg-variant="warning"
                    text-variant="white"
                    header="Próximos partidos"
                    class="text-center">
                    <b-card-text><a href="#" class="text-white">Aquí puedes ver contra quien jugamos el próximo encuentro</a></b-card-text>
                </b-card>

                <b-card
                    bg-variant="danger"
                    text-variant="white"
                    header="Resultados"
                    class="text-center">
                    <b-card-text><a href="#" class="text-white">Mira como nos ha ido en los últimos partidos</a></b-card-text>
                </b-card>
            </b-card-group>
        </div>

        <!-- noticia RFEF-->
        <div class="mt-3">
            <b-card no-body="no-body" class="overflow-hidden">
                <b-row no-gutters="no-gutters">
                    <b-col md="6">
                        <b-card-img
                            src="https://cdn1.sefutbol.com/sites/default/files/84ef16b2-7c12-499f-b91a-d002b7c53a90.jpeg"
                            alt="logo"
                            class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Suspensión de las competiciones" sub-title="27 marzo, 2020">
                            <b-card-text>
                                La RFEF aprueba la suspensión de todas las competiciones no profesionales hasta que las autoridades consideren que se pueden reanudar sin riesgo
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </div>

        <!-- comunicado oficial -->
        <div class="mt-3">
            <b-card no-body="no-body" class="overflow-hidden">
                <b-row no-gutters="no-gutters">
                    <b-col md="6">
                        <b-card-img
                            src="http://www.ucamdeportes.com/ucamcf/sites/www.ucamdeportes.com.ucamcf/files/styles/panoramica-news/public/news/comunicado-oficial-18-19-1019625291.jpg?itok=4dobS1uM"
                            alt="comunicado"
                            class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Comunicado Oficial | Coronavirus" sub-title="10 marzo, 2020">
                            <b-card-text>
                                Quedan suspendidos todos los entrenamientos desde mañana miércoles 11 de marzo de 2020 hasta nuevo aviso. La Real Federación de Fútbol de Madrid ha anunciado la suspensión de las competiciones territoriales durante las próximas dos semanas.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </div>

        <!-- resultados -->
        <div class="mt-3">
            <b-card no-body="no-body" class="overflow-hidden">
                <b-row no-gutters="no-gutters">
                    <b-col md="6">
                        <b-card-img
                            src="https://www.salamanca24horas.com/images/showid2/3062564?w=900"
                            alt="resultados"
                            class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Resultados del fin de semana" sub-title="9 marzo, 2020">
                            <b-card-text>
                                Nuestros equipos continuan con la buena dinámica de estas últimas 7 jornadas. Tras el tropiezo inicial a la vuelta de navidad, se cuentan los partidos por victoria.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </div>

        <!-- Puesto de entrenador -->
        <div class="mt-3">
            <b-card no-body="no-body" class="overflow-hidden">
                <b-row no-gutters="no-gutters">
                    <b-col md="6">
                        <b-card-img
                            src="https://www.eldigitalcastillalamancha.es/images/carpeta_relacionados/2019/03/16/93310_sergioru.jpg"
                            alt="puesto_entrenador"
                            class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body title="Puestos de entrenadores vacantes" sub-title="2 marzo, 2020">
                            <b-card-text>
                                Tenemos disponibles algunas vacantes de entrenadores de algunas de nuestras plantillas, si tienes el título mandalo y forma parte del club.
                            </b-card-text>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </div>
      </div>    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>