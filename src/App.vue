<template>
  <div class="maintenance-container">
    <b-container class="h-100 d-flex align-items-center justify-content-center">
      <b-row class="text-center">
        <b-col>
          <div class="box">
            <h1 class="title">Sitio no disponible</h1>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "MaintenancePage",
};
</script>

<style scoped>
.maintenance-container {
  min-height: 100vh;
  color: black;
}

.box {
  padding: 40px 20px;
}

.title {
  font-size: 2.2rem;
  font-weight: 600;
}

.subtitle {
  font-size: 1.1rem;
  opacity: 0.85;
}

/* Mobile */
@media (max-width: 576px) {
  .title {
    font-size: 1.6rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>