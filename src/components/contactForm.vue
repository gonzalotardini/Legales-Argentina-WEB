<template>
  <div class="contacto">
    <b-form
      :class="isDesktop ? 'px-4' : 'px-2'"
      class="border py-4"      
    >
      <h4 class="text-center mb-4">Envianos tu consulta</h4>
      <b-row>
        <b-col md="6" xs="12">
          <b-form-group label-for="input-nombre">
            <b-input-group>
              <b-input-group-prepend is-text>
                <i class="bi bi-person"></i>
              </b-input-group-prepend>

              <b-form-input
                id="input-nombre"
                v-model="formData.nombre"
                required
                placeholder="Nombre"
                :disabled="sendingMail"
              ></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col md="6" xs="12">
          <b-form-group label-for="input-apellido">
            <b-input-group>
              <b-input-group-prepend is-text>
                <i class="bi bi-person"></i>
              </b-input-group-prepend>

              <b-form-input
                id="input-apellido"
                v-model="formData.apellido"
                required
                placeholder="Apellido"
                :disabled="sendingMail"
              ></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>

      <b-form-group label-for="input-email">
        <b-input-group>
          <b-input-group-prepend is-text>
            <i class="bi bi-envelope"></i>
          </b-input-group-prepend>
          <b-form-input
            id="input-email"
            type="email"
            v-model="formData.email"
            required
            placeholder="nombre@ejemplo.com"
            :disabled="sendingMail"
          >
          </b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group label-for="input-consulta">
        <b-form-textarea
          id="input-consulta"
          v-model="formData.consulta"
          placeholder="Escribe tu consulta aquí"
          rows="5"
          :disabled="sendingMail"
        ></b-form-textarea>
      </b-form-group>

      <b-button class="btn-block" variant="dark" @click="sendMail()" :disabled="sendingMail">
        <b-spinner v-show="sendingMail" small></b-spinner>
        ENVIAR</b-button>
        <b-alert class="mt-3" variant="success" show v-show="successAlert">Tu consulta se envió correctamente. A la brevedad nos estaremos contactando con vos.</b-alert>
        <b-alert class="mt-3" variant="danger" show v-show="errorAlert">Se ha producido un error al completar la solicitud. Por favor intentá más tarde.</b-alert>
    </b-form>

  </div>
</template>
  
  <script>

import axios from "axios";

export default {
  name: "contactForm",
  components: {},
  data() {
    return {
      formData: {
        email: "",
        nombre: "",
        apellido: "",       
        consulta: "",
      },
      isDesktop: window.innerWidth >= 992,
      sendingMail: false,
      successAlert: false,
      errorAlert: false
    };
  },
  methods: {
    sendMail() {
      debugger;
      this.sendingMail = true;
      var emailData= {
        to: "gonzalotardini@gmail.com",
        subject: "CONSULTA EN FORMULARIO WEB DE: " + this.formData.nombre + " " + this.formData.apellido,
        text: this.getEmailText(this.formData)
      }
      axios.post('https://api-mail-wheat.vercel.app/send-email', emailData)
        .then(response => {
          console.log('Correo enviado:', response.data);
          this.sendingMail = false;
          this.successAlert = true;
        })
        .catch(error => {
          this.sendingMail = false;
          this.errorAlert = true;
          console.error('Error al enviar correo:', error);
        });
    },
    getEmailText(formData){
      var text = "NOMBRE: " + formData.nombre + " APELLIDO: " + formData.apellido + "\n";
      text = text + "EMAIL: " + formData.email + "\n";
      text = text + "CONSULTA: \n";
      text = text + formData.consulta;
      console.log(text);
      return text;
    }
  },
};
</script>
<style scoped>
.border {
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
  border-radius: 7px !important;
  /* background-color: white; */
}

.contact-btn {
  background-color: #006b93 !important;
  border-color: #006b93 !important;
}

input,
textarea,
.input-group-text {
  border-radius: unset;
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: white;
}
</style>