<template>
  <div class="card d-flex flex-column h-100">
    <img :src="image" :alt="name" />
    <div class="content h-100 d-flex flex-column justify-content-between">
      <h5 class="text-center">{{ name }}</h5>
      <p class="text-center">{{ archetype }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ["id", "image", "name", "archetype"],
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.card {
  background-color: $primarycolor;
  border: 0;
  border-radius: 0;
  .content {
    padding: 30px 0;
    h5 {
      color: $thirdcolor;
      margin: 0;
      padding: 5px 0;
    }
    p {
      margin: 0;
      padding-top: 5px;
      font-size: 1.2rem;
      font-weight: 300;
    }
  }
}
</style>
