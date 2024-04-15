<template>
    <div class="container">
        <div class="row">
            <div class="col-12" v-for="card in storage.cards">{{ card.name }}</div>
        </div>
    </div>
</template>

<script>
import { storage } from '../data/storage.js';
    export default {
        name : 'CardList',
        data() {
            return {
                storage
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>