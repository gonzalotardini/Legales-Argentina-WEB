<template>
  <b-container id="nuestrosClientes" class="py-5" fluid>
    <h1 class="text-center pt-4 pb-5">Nuestros Clientes</h1>
    <b-row>
      <b-carousel
        fade
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background=""
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        class="pb-5"
      >
        <b-carousel-slide
          v-for="(group, index) in groupedCards"
          :key="index"
          class="p-2"
        >
          <b-row align-h="center">
            <b-col v-for="(client, i) in group" :key="i" :cols="12" :md="4">
              <clientCard :client="client" />
            </b-col>
          </b-row>
        </b-carousel-slide>
      </b-carousel>
    </b-row>
    <div class="text-center">
      <b-btn
        href="https://www.google.com.ar/maps/place/Estudio+Giovanelli+Tardini+%26+Asociados/@-36.8433184,-64.1911268,10z/data=!4m18!1m9!3m8!1s0xc72fea9ea35abcb:0xa0b1ebfead24ba7e!2sEstudio+Giovanelli+Tardini+%26+Asociados!8m2!3d-38.45155!4d-63.5989957!9m1!1b1!16s%2Fg%2F11kqv_x7h0!3m7!1s0xc72fea9ea35abcb:0xa0b1ebfead24ba7e!8m2!3d-38.45155!4d-63.5989957!9m1!1b1!16s%2Fg%2F11kqv_x7h0?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        size="lg"
        variant="outline-light"
      >
        Mirá nuestra reseñas
      </b-btn>
    </div>
  </b-container>
</template>
  
  <script>
import clientCard from "./clientCard.vue";

export default {
  name: "clientes",
  components: { clientCard },
  data() {
    return {
      slide: 0,
      sliding: null,
      clients: [
        {
          title: "Agustín Mendieta",
          description:
            "Muy recomendable! La verdad unos genios! Trabajan de manera profesional y eficiente, resolvieron mi caso muy rápido y prolijo 👌…",
          starts: 5,
          variant: "primary"
        },
        {
          title: "Facundo  Ahumada",
          description:
            "La verdad que son muy profesionales solucionaron mi caso muy rápido y pude dar solución a mi siniestro. Muchas gracias a los señores abogado. Excelente atención altamente recomendable. Sin dudar",
          stars: 5,
          variant: "secondary"
        },
        {
          title: "Verónica Russo",
          description:
            "Excelente servicio ... te ayudan desde un lugar profesional pero también humano ... se toman el tiempo de responder sin problema y te sacan todas las dudas que puedas tener..muy agradecida",
          stars: 5,
          variant: "success"
        },
        {
          title: "Abel Ojeda",
          description:
            "la verdad unos genios son de confianza, trabajan con profesionales en todo aspecto te ponen en contexto cada paso en tu caso, en menos de 40 días me abonaron lo justo a mi caso, ya tiene un cliente fijo y para recomendar a mas gente ",
          stars: 5,
          variant: "info"
        },
        {
          title: "Pablo Gronski",
          description:
            "Me resolvieron un caso complicado en poco tiempo y con una solución inmediata.  Excelente atención y respuestas rápidas.",
          stars: 5,
          variant: "warning"
        },
        {
          title: "Martin Aguero",
          description:
            "Tuve un accidente vehicular en 2021. Tuve una mala asesoría. Los contacte y pese a los años que pasaron me los resolvieron en un mes y medio. Siempre informándome de la situación. La verdad son excelentes. Muchas gracias!!!",
          stars: 5,
          variant: "danger"
        },
      ],
      isMobile: window.innerWidth <= 768,
    };
  },
  computed: {
    groupedCards() {
      const groupSize = this.isMobile ? 1 : 3;
      return this.clients.reduce((acc, curr, i) => {
        if (i % groupSize === 0) acc.push([]);
        acc[acc.length - 1].push(curr);
        return acc;
      }, []);
    },
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    handleResize() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
  
<style scoped>
.carousel {
  width: 100% !important;
}
.carousel-item {
  min-height: 400px;
}
.carousel-caption {
  justify-content: center !important ;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.container-fluid {
  /* background-color: #343a40; */
  background-image: url("../assets/acuerdo.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

@media (max-width: 576px) {
  .container-fluid {
    background-size: auto;
  }
}

img {
  filter: brightness(0.4);
}

h1 {
  color: white;
}
</style>