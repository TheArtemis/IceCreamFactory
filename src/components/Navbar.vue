<script setup>
const homeRoute = {
    name: 'home'
}

</script>

<template>
    <div class="navbar-box">
        <button class="navbar-title poppins-semibold" @click="() => $router.push(homeRoute)">Ice Cream Factory</button>
    </div>
</template>

<style scoped>
.navbar-box {
    height: 100px;
    background-color: #F4F4F4;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 220px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 2em;
    box-shadow: 0px 5px 21px -3px rgba(0, 0, 0, 0.12);
}

.navbar-title {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
    font-size: 60px;
    color: #000000;
    margin: 0px;
    display: flex;
    flex-wrap: wrap
}

.navbar-title:hover {
    cursor: pointer;
}
</style>