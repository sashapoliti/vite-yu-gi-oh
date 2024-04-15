<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import { storage } from './data/storage.js';
import axios from 'axios';
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
    },
    created() {
      axios.get(this.storage.apiUrl + this.storage.endPoint.cards).then((res) => {
        console.log(res.data.data);
        this.storage.cards = res.data.data;
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>