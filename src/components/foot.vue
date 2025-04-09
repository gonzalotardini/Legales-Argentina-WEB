<template>
  <div class="footer">
    <b-container class="pt-4">
      <b-row>
        <b-col>
          <p>
            <i class="bi bi-geo-alt-fill"></i> Arenales 554, B1638 Vicente
            López, Provincia de Buenos Aires
          </p>
          <p><i class="bi bi-whatsapp"></i> +54 9 11 5767-2793</p>
          <p><i class="bi bi-envelope"></i> estudio@giovanellitardini.com.ar</p>
          <a
            href="https://donweb.com/es-ar/certificados-ssl"
            title="Certificados SSL Argentina"
            target="_blank"
          >
            <!-- Imagen del logo SSL -->
            <img
              src="https://micuenta.donweb.com/img/sectigo_positive_sm.png"
              alt="Certificado SSL"
            />
          </a>
        </b-col>
        <b-col>
          <b-row>
            <p>
              <a
                class="bi bi-whatsapp mr-2"
                href="https://wa.me/5491157672793?text=Hola%20quisiera%20más%20información"
                target="_blank"
              ></a>
            </p>
            <p>
              <a
                class="bi bi-instagram mr-2"
                href="https://www.instagram.com/tuabogadoresponde/"
                target="_blank"
              ></a>
            </p>
            <p>
              <a
                class="bi bi-facebook mr-2"
                href="https://www.facebook.com/tuabogadoresp/"
                target="_blank"
              ></a>
            </p>
            <p>
              <a
                href="https://www.tiktok.com/@tuabogadoresponde"
                target="_blank"
              >
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
              </a>
            </p>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "foot",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.footer {
  background-color: #242632;
  min-height: 200px;
}
p {
  color: rgb(124, 124, 124);
}
a {
  color: rgb(124, 124, 124) !important;
}
</style>