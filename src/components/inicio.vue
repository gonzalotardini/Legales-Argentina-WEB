<template>  
  <div id="inicio">
    <b-carousel
      id="carousel"
      fade
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide
        clas="img-fluid"
        :img-src="require('@/assets/uba.webp')"
      >
        <div class="div-h mt-5">
          <h1>Legales Argentina</h1>

          <b-btn size="lg" href="#contacto" variant="outline-light mt-5"> CONTACTANOS </b-btn>

        </div>
      </b-carousel-slide>     
    </b-carousel>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style scoped>
>>> .img-fluid {
  max-height: 700px !important; /* Limita la altura máxima de la imagen */
  width: 100% !important; /* Asegura que la imagen mantenga su ancho completo */
  object-fit: cover !important; /* Ajusta la imagen para que mantenga proporciones dentro del espacio */
}
>>> img {
  filter: brightness(0.4); /* Reduce el brillo, oscureciendo la imagen */
}
>>> .carousel-caption {
  top: 30% !important;
  transform: translateY(-30%) !important;
  bottom: initial !important;
}

h1 {
  font-size: 75px;
}

h3 {
  font-size: 40px;
}

h4 {
    font-size: 55px;
    font-weight: 200;

}

@media (max-width: 576px) {
  >>> .img-fluid {
    height: 290px !important; /* Ajusta según lo que consideres adecuado para móviles */
  }
  h1 {
    font-size: 40px;
  }

  h3 {
    font-size: 22px;
  }

  h4 {
    font-size: 25px;
    font-weight: 200;
  }
}
</style>