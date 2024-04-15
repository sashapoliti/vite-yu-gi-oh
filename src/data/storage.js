import { reactive } from "vue";

export const storage = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/",
  endPoint: {
    cards: "cardinfo.php?num=20&offset=0",
  },
  cards: [],
  loading: false
});
