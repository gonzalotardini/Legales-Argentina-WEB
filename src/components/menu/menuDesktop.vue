<template>
  <b-navbar
    sticky
    type="dark"
    variant="dark"
    class="navbar"
    :class="{ 'navbar-shrink': isShrunk }"
  >
    <b-navbar-brand href="#">
      GIOVANELLI & TARDINI
    </b-navbar-brand>

    <b-navbar-nav
      class="d-flex w-100 justify-content-between align-items-center"
    >
      <div class="mx-auto d-flex justify-content-center">
        <!-- Usar router-link solo para la opción "NOSOTROS EN LOS MEDIOS" -->
        <b-nav-item
          v-for="i in menuOptions"
          :key="i.title"
          class="ml-3 mt-1"
          @click="handleMenuClick(i)"
        >
          <!-- Si la opción es "NOSOTROS EN LOS MEDIOS", usamos router-link -->
          <router-link v-if="i.title === 'NOSOTROS EN LOS MEDIOS'" :to="i.href" class="nav-link">
            {{ i.title }}
          </router-link>
          <!-- Si la opción es un ancla, usamos un enlace tradicional -->
          <a v-else :href="i.href" class="nav-link">{{ i.title }}</a>
        </b-nav-item>
      </div>

      <div class="d-flex align-items-center">
        <b-nav-item href="#" @click="changeLanguage('es')">ES</b-nav-item>
        <span class="mx-1">|</span>
        <b-nav-item href="#" @click="changeLanguage('en')">EN</b-nav-item>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      isShrunk: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    menuOptions() {
      return this.$store.state.menuOptions;
    },
  },
  methods: {
    changeLanguage() {
      // Lógica para cambiar el idioma
    },
    handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 450) {
        this.isShrunk = true;
      } else if (scrollPosition < 400) {
        this.isShrunk = false;
      }
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
    }
  },
};
</script>

<style scoped>
/* Estilo de opciones de menú */
a.navbar-brand,
a.nav-link {
  color: white !important;
  font-size: 16px;
  letter-spacing: 0.2em;
}

@media (max-width: 1350px) {
  a.navbar-brand,
  a.nav-link {
    font-size: 0.7rem !important;
    letter-spacing: 0.2em;
  }
}

.navbar {
  background-color: #343a40 !important;
  height: 120px;
  transition: height .400s ease;
}

a.nav-link:hover {
  font-weight: bold !important;
}
/* Asegura que el menú principal se centre correctamente */
.d-flex {
  display: flex;
}

.w-100 {
  width: 100%;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.justify-content-center {
  justify-content: center;
}

.align-items-center {
  align-items: center;
}

/* Estilos para tamaño navbar al scrollear */

.navbar-shrink {
  padding: 0.5rem;
  height: 80px;
}

.navbar-shrink .navbar-brand,
.navbar-shrink .nav-item a.nav-link {
  font-size: 0.8rem; /* Reducir el tamaño de la fuente */
}
</style>