<template>
  <HeaderComponent />
  <MainComponent @turn-page="getCards()" />
</template>

<script>
import { storage } from "./data/storage.js";
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
      storage,
    };
  },
  watch: {
    "storage.selectedArchetype"(newParams, oldParams) {
      if (newParams !== oldParams) {
        this.setParams();
      }
    },
  },
  methods: {
    setParams() {
      this.storage.options = {
        params: {
          num: 20,
          offset: 0,
        },
      };
      if (this.storage.selectedArchetype) {
        this.storage.options.params.archetype = this.storage.selectedArchetype;
      } else {
        delete this.storage.options.params.archetype;
      }
      this.getCards();
    },
    getCards() {
      this.storage.loading = true;
      axios
        .get(
          this.storage.apiUrl + this.storage.endPoint.cards,
          this.storage.options
        )
        .then((res) => {
          console.log(res.data.data);
          this.storage.total = res.data.meta.total_rows;
          const {
            total_pages,
            pages_remaining,
            previous_page_offset,
            next_page_offset,
          } = res.data.meta;
          this.storage.pages = {
            total_pages,
            pages_remaining,
            previous_page_offset,
            next_page_offset,
          };
          console.log(this.storage.pages);
          this.storage.cards = res.data.data.map((card) => {
            return {
              id: card.id,
              name: card.name,
              image: card.card_images[0].image_url,
              archetype: card.archetype,
            };
          });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.storage.loading = false;
        });
    },
    getArchetype() {
      axios
        .get(this.storage.apiUrl + this.storage.endPoint.archetype)
        .then((res) => {
          console.log(this.storage.apiUrl + this.storage.endPoint.archetype);
          console.log(res.data);
          this.storage.archetypeList = res.data /* .slice(0, 10) */;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },
  },
  created() {
    this.getCards();
    this.getArchetype();
  },
};
</script>

<style lang="scss" scoped></style>
