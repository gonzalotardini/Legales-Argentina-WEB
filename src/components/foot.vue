<template>
  <div class="footer">
    <b-container class="pt-4">
      <b-row>
        <b-col>
          <p><i class="bi bi-whatsapp"></i> +54 9 11 2401-5528</p>
          <p class="text-nowrap"><i class="bi bi-envelope"></i> contactolegalesargentina@gmail.com</p>
        </b-col>
        <b-col>
          <b-row>
            <p>
              <a
                class="bi bi-whatsapp mr-2"
                href="https://wa.me/5491124015528?text=Hola%20quisiera%20más%20información"
                target="_blank"
              ></a>
            </p>
            <p>
              <a
                class="bi bi-instagram mr-2"
                href="https://www.instagram.com/legales.argentina/"
                target="_blank"
              ></a>
            </p>
            <p>
              <a
                class="bi bi-facebook mr-2"
                href="https://www.facebook.com/LegalesDeArgentina?rdid=ABiJwCeu9B3TxV9T&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AMDxQDEpE%2F#"
                target="_blank"
              ></a>
            </p>
            <p>
              <a
                href="https://www.tiktok.com/@legalesargentina"
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
  background-color: #1B263B;
  min-height: 200px;
}
p {
  color: #FFFFFF;
}
a {
  color: #FFFFFF !important;
}
</style>