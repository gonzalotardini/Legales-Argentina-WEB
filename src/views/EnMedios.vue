<template>
  <div>
    <b-jumbotron class="text-center" header="Nosotros En Los Medios">
    </b-jumbotron>
    <div
      class="mx-auto d-block image-container "
      :class="isMobile ? 'w-100 h-100' : 'w-50 h-50'"
    >
      <b-row class="d-flex justify-content-center">
        <a
          class=""
          href="https://caras.perfil.com/noticias/caras-glam/gala-caras-moda-tributo-diseno-creatividad.phtml"
          target="_blank"
        >
          <img class="zoom-img" src="../assets/caras.jpg" alt="Revista Caras" />
        </a>
      </b-row>
    </div>

    <div class="mx-auto d-block " :class="isMobile ? 'w-100 h-100' :'w-50 h-50'">
      <small :class="isMobile ? 'w-100 h-100' :'w-50 h-50'">Revista Caras</small>
    </div>

    <b-row class="my-4 d-flex justify-content-center">
      <b-btn
       :class="{ 'w-25': !isMobile }"
        variant="outline-dark"
        href="https://caras.perfil.com/noticias/caras-glam/gala-caras-moda-tributo-diseno-creatividad.phtml"
        target="_blank"
      >
        Mirá la nota
      </b-btn>
    </b-row>
  </div>
</template>
  
  <script>
export default {
  name: "Home",
  components: {},
  computed: {
    isMobile() {
      return window.innerWidth <= 768;
    },
  },
};
</script>
  
  <style scoped>
h1 {
  font-family: Rubik, Helvetica, Arial, sans-serif !important;
  font-weight: bold;
  font-size: 48px;
}

.image-container {
  overflow: hidden;
}

/* Estilo de la imagen y efecto de zoom */
.zoom-img {
  width: 100%;
  transition: transform 0.3s ease;
  transform-origin: center center;
}

.zoom-img:hover {
  transform: scale(1.03); /* zoom de 3% a la imagen */
  z-index: 2;
}
</style>