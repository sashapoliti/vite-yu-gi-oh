<template>
    <h6>Found {{ storage.total }} cards</h6>
</template>

<script>
import { storage } from "../data/storage.js";
    export default {
        name: "TotalCards",
        data() {
            return {
                storage
            }
        }
    }
</script>

<style lang="scss" scoped>
    h6 {
      margin: 0;
      font-weight: bold;
    }
</style>