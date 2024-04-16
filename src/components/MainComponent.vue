<template>
  <main class="container">
    <section class="container">
      <SelectArchetype />
    </section>
    <section class="container">
      <CardList />
    </section>
  </main>
</template>

<script>
import CardList from "./CardList.vue";
import SelectArchetype from "./SelectArchetype.vue";
export default {
  name: "MainComponent",
  components: {
    CardList,
    SelectArchetype
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

section {
  background-color: $thirdcolor;
  margin-top: 30px;
  padding: 0;
  &:first-child {
    width: 250px;
    background-color: transparent;
    margin-left: 0;
  }
}
</style>
