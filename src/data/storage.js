import { reactive } from "vue";

export const storage = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/",
  endPoint: {
    cards: "cardinfo.php",
    archetype: 'archetypes.php'
  },
  options: {
    params: {
      num: 20,
      offset: 0
    }
  },
  total: 0,
  pages: {},
  cards: [],
  archetypeList: [],
  selectedArchetype: "",
  loading: false
});
