<template>
    <div>
      <inicio/>
      <areas/>
      <!-- <clientes/> -->
      <conctact/>
      <foot/>
    </div>
  </template>
  
  <script>
import inicio from '../components/inicio.vue';
import areas from '../components/areas.vue';
import conctact from '../components/contact.vue';
import foot from '../components/foot.vue';

  export default {
    name: 'Home',
    components:{
    inicio,
    areas,
    conctact,
    foot,
    }
  };
  </script>