<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import { storage } from './data/storage.js';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent
    },
    data() {
      return {
        storage
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>