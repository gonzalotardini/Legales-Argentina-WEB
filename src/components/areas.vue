<template>
    <b-container id="areasDePractica" class="my-5" >
      <h1 class="text-center my-5 font-weight-bold">Áreas de Práctica</h1>
        <b-row class="pb-3">
            <b-col md="6" sm="12" class="text-center">
                <img :src="require('@/assets/icons/choque.svg')" alt="">
                <h5>Accidentes de tránsito</h5>
                <p>Contamos con un equipo integral de médicos y especialistas en lesiones y accidentes de tránsito. Conseguimos la compensación más justa y en el mejor tiempo posible</p>
            </b-col>
            <b-col md="6" sm="12" class="text-center">
                <img :src="require('@/assets/icons/ART.svg')" alt="">
                <h5>ART</h5>
                <p>Nos aseguramos de que la ART cumpla con tu tratamiento y luchamos por obtener la mejor indemnización en el menor tiempo posible.</p>
            </b-col>           
        </b-row>
        <b-row class="pt-3">
            <b-col md="6" sm="12" class="text-center">
                <img :src="require('@/assets/icons/consumo.svg')" alt="">
                <h5>Derecho de consumo y contractual</h5>
                <p>Nos especializamos en la defensa de asegurados, especialmente en casos donde las aseguradoras se niegan a cubrir el robo de un vehículo. Protegemos los derechos de los usuarios vulnerables para garantizar que reciban la indemnización justa conforme a la ley y su póliza.</p>
            </b-col>
            <b-col md="6" sm="12" class="text-center">
                <img :src="require('@/assets/icons/futbol.svg')" alt="">
                <h5>Sucesiones</h5>
                <p>Ofrecemos representación legal a profesionales del fútbol y artistas, revisando detalladamente sus contratos para evitar arrepentimientos futuros y asegurar una gestión eficaz de sus intereses.</p>
            </b-col>
        </b-row>
        <b-row>

        </b-row>
    </b-container>
  </template>
  
  <script>
  export default {
    name: "contact",
    components: {},
    data(){
      return {          
      }
    }
  };
  </script>

  <style scoped>
    img {
        max-height: 80%;
        max-width: 80px;
    }
  </style>