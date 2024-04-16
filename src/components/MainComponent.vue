<template>
  <main class="container">
    <section class="container">
      <SelectArchetype />
    </section>
    <section class="container position-relative">
      <button class="prev-page"><i class="fa-solid fa-arrow-left"></i></button>
      <button class="next-page"><i class="fa-solid fa-arrow-right"></i></button>
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
    SelectArchetype,
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
  button {
    background-color: $thirdcolor;
    padding: 5px 10px;
    border: 0;
    border-radius: 50px;
    &.next-page {
      position: absolute;
      right: 10px;
      top: 10px;
    }
    &.prev-page {
      position: absolute;
      left: 10px;
      top: 10px;
    }
    &:hover {
      background-color: $primarycolor;
      transition-duration: 0.3s;
    }
  }
}
</style>
