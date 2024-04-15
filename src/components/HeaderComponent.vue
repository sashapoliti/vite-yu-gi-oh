<template>
    <header class="d-flex align-items-center ">
        <img src="/images/logo.png" alt="Logo">
        <h1>Yu-Gi-Oh Api</h1>
    </header>
</template>

<script>
    export default {
        name : 'HeaderComponent',
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    header {
        width: 100%;
        background-color: $thirdcolor;
        color: $secondarycolor;
        padding: 20px;
        img {
            height: 70px;
            margin-right: 20px;
        }
    }
</style>