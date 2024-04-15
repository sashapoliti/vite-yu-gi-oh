<template>
  <main class="container">
    <CardList />
  </main>
</template>

<script>
import CardList from "./CardList.vue";
export default {
  name: "MainComponent",
  components: {
    CardList,
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

main {
  background-color: $thirdcolor;
  margin-top: 30px;
  padding: 0;
}
</style>
