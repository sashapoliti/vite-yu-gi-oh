<template>
  <select class="form-select" v-model="storage.selectedArchetype">
    <option value="">Select the archetype</option>
    <option :value="archetype.archetype_name" v-for="(archetype) in storage.archetypeList">{{ archetype.archetype_name }}</option>
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
