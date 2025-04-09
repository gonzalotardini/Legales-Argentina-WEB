<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <!-- <img src="@/assets/icons/logo.png" alt="Logo" class="d-inline-block align-top" height="30" /> -->
        GIOVANELLI & TARDINI
      </b-navbar-brand>
  
      <!-- Contenedor para el texto "ES | EN" y el toggle -->
      <div class="navbar-right">
        <span class="language-options">ES | EN</span>
        <!-- Toggle para mobile (hamburguesa y cruz) -->
        <b-navbar-toggle target="nav-bar" @click="toggleMenu">
        </b-navbar-toggle>
      </div>
  
      <!-- Menú desplegable para mobile -->
      <div class="nav-bar" :class="{'mobile-menu': true, 'show': isMenuOpen}" id="nav-collapse">
        <b-navbar-nav>
          <b-nav-item class="text-right pr-5 X" href="#" @click="toggleMenu">X</b-nav-item>
          <b-nav-item v-for="i in menuOptions" :key="i.title" class="ml-3 mt-1" :href="i.href" @click="handleMenuClick(i)" >
            <router-link v-if="i.title === 'NOSOTROS EN LOS MEDIOS'" :to="i.href" class="nav-link">
            {{ i.title }}
          </router-link>
          <a v-else :href="i.href" class="nav-link">{{ i.title }}</a>
          </b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false, // Controla el estado del menú móvil
      };
    },
    computed:{
          menuOptions(){
              return this.$store.state.menuOptions;
          }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen; // Alterna el estado del menú
      },
      changeLanguage() {
        // Lógica para cambiar el idioma
      },
      handleMenuClick(option) {
      // Si estamos en la página "Nosotros en los Medios", navegamos a la home primero
      if (this.$route.path === '/en-medios' && option.href && option.href.startsWith('#')) {
        this.$router.push('/').then(() => {
          this.$nextTick(() => {
            const section = document.querySelector(option.href);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          });
        });
      } else if (option.href && option.href.startsWith('#')) {
        // Si estamos en la home, hacemos scroll al ancla
        const section = document.querySelector(option.href);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
      this.toggleMenu();
    }
    }
  }
  </script>
  
  <style scoped>
  /* Contenedor para los elementos a la derecha */
  .navbar-right {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  
  /* Opciones de idioma */
  .language-options {
    margin-right: 10px; /* Espacio entre el texto y la hamburguesa */
    color: white;
  }
  
  /* Menú móvil deslizante de derecha a izquierda */
  .mobile-menu {
    position: fixed; /* Asegura que se mantenga en la pantalla */
    top: 0;
    right: 0;
    width: 100%;
    height: 100%; /* Asegura que ocupe el 100% de la altura visible */
    background-color: #343a40;
    z-index: 1050;
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%); /* Inicialmente fuera de la pantalla */
    overflow-y: auto; /* Permite desplazamiento vertical si el contenido es largo */
  }
  
  /* Mostrar el menú cuando esté activo (desplegado) */
  .show {
    transform: translateX(0); /* Lo desliza hacia dentro */
  }
  
  .navbar {
    height: 80px;
  }
  
  .X {
    border-bottom: solid;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.5);
  }
  </style>