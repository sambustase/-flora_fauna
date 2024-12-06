<script>
import { RouterLink, RouterView } from 'vue-router'
import Portada from './components/Portada.vue';

export default {
  name: 'App',
  components:{
    Portada,
  }
}
</script>

<template>
    <div id="app">
      <Portada></Portada>
      <RouterView />
    </div>
    
</template>

<style scoped>
</style>
