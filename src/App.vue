<template>
  <div class="wrapper">
    <!-- <router-view/> -->
    <!-- <main-layout></main-layout> -->
    <component :is="layout + '-layout'" v-if="layout" />
  </div>
</template>

<script>
// import {useRoute} from 'vue-router'
import MainLayout from './layout/MainLayout.vue';
import AuthLayout from './layout/AuthLayout.vue';

export default {
  data() {
    return {
      
    }
  },
  computed: {
    layout() {
      return this.$route.meta.layout; // Для возврата значения layout
    }
  },
  components: {MainLayout, AuthLayout}
}

</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
  @import './assets/css/style.scss';
</style>
