<template>
    <div class="container">
        <div class="header-cards">
            <h6>Found 39 cards</h6>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3" v-for="card in storage.cards" :key="card.id">{{ card.name }}</div>
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
@use '../assets/styles/partials/variables' as *;

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