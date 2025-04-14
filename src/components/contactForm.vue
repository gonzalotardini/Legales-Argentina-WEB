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
                @blur="touched.nombre = true"
                :state="getValidationState('nombre')"
                placeholder="Nombre"
                :disabled="sendingMail"
              ></b-form-input>
            </b-input-group>
            <b-form-invalid-feedback v-if="errors.nombre">
              {{ errors.nombre }}
            </b-form-invalid-feedback>
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
                @blur="touched.apellido = true"
                :state="getValidationState('apellido')"
                placeholder="Apellido"
                :disabled="sendingMail"
              ></b-form-input>
            </b-input-group>
            <b-form-invalid-feedback v-if="errors.apellido">
              {{ errors.apellido }}
            </b-form-invalid-feedback>
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
            @blur="touched.email = true"
            :state="getValidationState('email')"
            placeholder="nombre@ejemplo.com"
            :disabled="sendingMail"
          ></b-form-input>
        </b-input-group>
        <b-form-invalid-feedback v-if="errors.email">
          {{ errors.email }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label-for="input-consulta">
        <b-form-textarea
          id="input-consulta"
          v-model="formData.consulta"
          @blur="touched.consulta = true"
          :state="getValidationState('consulta')"
          placeholder="Escribe tu consulta aquí"
          rows="5"
          :disabled="sendingMail"
        ></b-form-textarea>
        <b-form-invalid-feedback v-if="errors.consulta">
          {{ errors.consulta }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button
        class="btn-block contact-btn"
        @click="sendMail()"
        :disabled="sendingMail"
      >
        <b-spinner v-show="sendingMail" small></b-spinner>
        ENVIAR
      </b-button>

      <b-alert class="mt-3" variant="success" show v-show="successAlert">
        Tu consulta se envió correctamente. A la brevedad nos estaremos contactando con vos.
      </b-alert>
      <b-alert class="mt-3" variant="danger" show v-show="errorAlert">
        Se ha producido un error al completar la solicitud. Por favor intentá más tarde.
      </b-alert>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "contactForm",
  data() {
    return {
      formData: {
        email: "",
        nombre: "",
        apellido: "",
        consulta: "",
      },
      touched: {
        email: false,
        nombre: false,
        apellido: false,
        consulta: false,
      },
      errors: {
        email: "",
        nombre: "",
        apellido: "",
        consulta: "",
      },
      isDesktop: window.innerWidth >= 992,
      sendingMail: false,
      successAlert: false,
      errorAlert: false,
    };
  },
  methods: {
    getValidationState(field) {
      if (!this.touched[field]) return null;
      return this.errors[field] ? false : true;
    },
    validateForm() {
      let isValid = true;
      this.errors = {
        email: "",
        nombre: "",
        apellido: "",
        consulta: "",
      };

      if (!this.formData.nombre.trim()) {
        this.errors.nombre = "El nombre es obligatorio.";
        isValid = false;
      }

      if (!this.formData.apellido.trim()) {
        this.errors.apellido = "El apellido es obligatorio.";
        isValid = false;
      }

      if (!this.formData.email.trim()) {
        this.errors.email = "El email es obligatorio.";
        isValid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(this.formData.email)) {
        this.errors.email = "El email no es válido.";
        isValid = false;
      }

      if (!this.formData.consulta.trim()) {
        this.errors.consulta = "Por favor ingresá tu consulta.";
        isValid = false;
      }

      return isValid;
    },
    sendMail() {
      // marcar todos como tocados para mostrar validaciones
      Object.keys(this.touched).forEach((key) => (this.touched[key] = true));

      if (!this.validateForm()) return;

      this.sendingMail = true;

      const emailData = {
        to: "contactolegalesargentina@gmail.com",
        subject:
          "CONSULTA EN FORMULARIO WEB DE: " +
          this.formData.nombre +
          " " +
          this.formData.apellido,
        text: this.getEmailText(this.formData),
      };

      axios
        .post("https://api-mail-wheat.vercel.app/send-email", emailData)
        .then((response) => {
          console.log("Correo enviado:", response.data);
          this.sendingMail = false;
          this.successAlert = true;
        })
        .catch((error) => {
          this.sendingMail = false;
          this.errorAlert = true;
          console.error("Error al enviar correo:", error);
        });
    },
    getEmailText(formData) {
      return (
        "NOMBRE: " +
        formData.nombre +
        " APELLIDO: " +
        formData.apellido +
        "\nEMAIL: " +
        formData.email +
        "\nCONSULTA:\n" +
        formData.consulta
      );
    },
  },
};
</script>

<style scoped>
.border {
  border: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
  border-radius: 7px !important;
}

.contact-btn {
  background-color: #1b263b !important;
  border-color: #1b263b !important;
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