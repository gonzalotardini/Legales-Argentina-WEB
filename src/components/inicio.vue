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
        :img-src="require('@/assets/uba.jpg')"
      >
        <div class="div-h mt-5">
          <h1>Legales Argentina</h1>

          <b-btn href="#contacto" variant="outline-light mt-5"> CONTACTANOS </b-btn>

        </div>
      </b-carousel-slide>

      <!-- <b-carousel-slide
        class="img-fluid"
        :img-src="require('@/assets/socios.jpg')"
      >
      </b-carousel-slide> -->

      <!-- Slides with image only -->
      <!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
            >
          </template>
        </b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide> -->
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
    font-size: 30px;
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