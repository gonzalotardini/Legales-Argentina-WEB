<template>
  <div id="app">
    <a href="https://wa.me/5491157672793?text=Hola%20quisiera%20más%20información" class="whatsapp-float" target="_blank" rel="noopener noreferrer">
      <i class="bi bi-whatsapp"></i>
    </a>
    <menuDesktop v-if="isDesktop" />
    <menuMobile v-else />
    <router-view></router-view>
  </div>
</template>

<script>
import menuDesktop from './components/menu/menuDesktop.vue';
import menuMobile from './components/menu/menuMobile.vue';

export default {
  name: 'App',
  components: {
    menuDesktop,
    menuMobile,
  },
  data() {
    return {
      isDesktop: window.innerWidth >= 992
    }
  },
  mounted() {
  },
  methods: {
    changeLanguage() {
      // Lógica para cambiar el idioma
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
#app {
  font-family: Rubik, Helvetica, Arial, sans-serif;
}
.mobile-menu {
  height: 100% !important;
}
</style>

<style scoped>
.whatsapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  z-index: 100;
}

.whatsapp-float i {
  width: 100%;
  height: auto;
  padding: 10px;
  vertical-align: text-top !important;
}
</style>
