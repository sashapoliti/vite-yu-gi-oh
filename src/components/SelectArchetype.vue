<template>
  <select class="form-select">
    <option selected>Select the archetype</option>
    <option value="1">One</option>
  </select>
</template>

<script>
import { storage } from "../data/storage.js";
export default {
  name: "SelectArchetype",
  data() {
    return {
      storage
    }
  }
};
</script>

<style lang="scss" scoped></style>
