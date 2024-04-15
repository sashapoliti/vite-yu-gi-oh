<template>
  <div class="container">
    <div class="header-cards">
      <h6>Found {{ storage.cards.length }} cards</h6>
    </div>
    <div class="row">
      <div
        class="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 gy-4"
        v-for="card in storage.cards"
        :key="card.id"
      >
        <CardComponent
          :id="card.id"
          :image="card.card_images[0].image_url"
          :name="card.name"
          :archetype="card.archetype"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { storage } from "../data/storage.js";
import CardComponent from "./CardComponent.vue";
export default {
  name: "CardList",
  components: {
    CardComponent,
  },
  data() {
    return {
      storage,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.container {
  padding: 50px;
  .header-cards {
    width: 100%;
    background-color: $secondarycolor;
    color: $thirdcolor;
    padding: 20px;
    h6 {
      margin: 0;
      font-weight: bold;
    }
  }
}
</style>
