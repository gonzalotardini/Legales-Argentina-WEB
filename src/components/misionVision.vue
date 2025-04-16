<template>
    <section class="bg-light py-5">
      <div class="container">
        <h1 class="text-center font-weight-bold mb-5">Nuestra Misión y Visión</h1>
        <div class="row align-items-center">
          <!-- Imagen decorativa -->
          <div class="col-md-4 mb-4 mb-md-0 text-center">
            <img src="@/assets/balanza.svg" alt="Justicia" class="img-fluid" style="max-height: 150px;" />
          </div>
  
          <!-- Contenido de misión y visión -->
          <div class="col-md-8">
            <div class="row mt-4">
              <!-- Misión -->
              <div class="col-md-6 mb-4">
                <div class="card shadow-sm h-100">
                  <div class="card-body">
                    <h4 class="card-title text-primary d-flex align-items-center">
                      <i class="fas fa-bullseye mr-2"></i> Misión
                    </h4>
                    <p class="card-text">
                      Brindar asesoramiento legal integral con compromiso, profesionalismo y cercanía. Nuestro objetivo es garantizar la defensa de los derechos de cada cliente, buscando soluciones eficientes y personalizadas.
                    </p>
                  </div>
                </div>
              </div>
  
              <!-- Visión -->
              <div class="col-md-6 mb-4">
                <div class="card shadow-sm h-100">
                  <div class="card-body">
                    <h4 class="card-title text-success d-flex align-items-center">
                      <i class="fas fa-eye mr-2"></i> Visión
                    </h4>
                    <p class="card-text">
                      Ser un estudio jurídico de referencia por nuestra excelencia, innovación y trato humano. Aspiramos a construir relaciones de confianza duraderas y a crecer junto a quienes confían en nosotros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'MisionVision'
  }
  </script>
  
  <style scoped>
  h2 {
    font-family: 'Poppins', sans-serif;
  }
  .card-title i {
    font-size: 1.3rem;
  }

  .card {
    border-radius: 1.5rem !important
  }
  </style>