<template>
  <div id="contacto" class="contacto pt-4">
    <b-container class="pt-5 pb-5">
      <h1 class="text-center pb-5 font-weight-bold">Contacto</h1>
      <b-row>
        <b-col md="6" class="col-map pt-4" sm="12">
          <!-- <p>
            <i class="bi bi-geo-alt-fill"></i> Arenales 554, B1638 Vicente
            López, Provincia de Buenos Aires
          </p> -->
          <h1>¿Necesitás asesoramiento legal?</h1>
          <h5>
            Completá el formulario y contanos tu consulta. Estamos listos para
            brindarte la mejor solución jurídica.
          </h5>
          <p class="pt-4 mb-1"><i class="bi bi-whatsapp"></i> +54 9 11 2401-5528</p>
          <p class="text-nowrap mb-1">
            <i class="bi bi-envelope"></i> contactolegalesargentina@gmail.com
          </p>
          <p class="mb-1">
            <a
              class="bi bi-instagram mr-2"
              href="https://www.instagram.com/legales.argentina/"
              target="_blank"
            >
              legales.argentina</a
            >
          </p>
          <p class="mb-1">
            <a
              class="bi bi-facebook mr-2"
              href="https://www.facebook.com/LegalesDeArgentina?rdid=ABiJwCeu9B3TxV9T&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AMDxQDEpE%2F#"
              target="_blank"
            >
              Legales Argentina</a
            >
          </p>
          <p class="mb-1">
            <a href="https://www.tiktok.com/@legalesargentina" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-tiktok"
                viewBox="0 0 16 16"
              >
                <path
                  d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"
                />
              </svg>
              legalesargentina
            </a>
          </p>
        </b-col>
        <b-col md="6" sm="12">
          <contactForm />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import contactForm from "./contactForm.vue";

export default {
  name: "contact",
  components: { contactForm },
  data() {
    return {
      form: {
        nombre: "",
        apellido: "",
        email: "",
        consulta: "",
      },
      isDesktop: window.innerWidth >= 992,
    };
  },
  methods: {
    onSubmit() {
      var hola = "";
      return hola;
    },
  },
};
</script>
<style>
/* Contenedor del iframe */
.map {
  position: relative;
  padding-bottom: 56.25%; /* Relación de aspecto 16:9 */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #eee;
}

/* iframe dentro del contenedor */
.map iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* iconos */
.bi-geo-alt-fill::before {
  vertical-align: text-top !important;
}

.col-map {
  border-right: solid;
  border-color: #ededed;  
}

.contacto {
  background-color: #f2f2f2;
}

.col-map a {
  color: #212529 !important;
}

.border {
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
  border-radius: 7px !important;
  /* background-color: white; */
}

.contact-btn {
  background-color: #006b93 !important;
  border-color: #006b93 !important;
}

@media (max-width: 576px) {
  h1 {
    text-align: center !important;
  }
}
</style>