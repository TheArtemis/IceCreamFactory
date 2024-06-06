<script setup>
import FactoryCard from '../components/FactoryCard.vue';
</script>
<template>
    <div class='factory-cards-grid'>
        <FactoryCard titleFirstLine="Ice" titleSecondLine="Creams." buttonColor="#B9E8E2"
            description="The best Ice Cream in the world. Enjoy certified classics like Pistacchione, Ciccolatoso and King."
            buttonText="Relish" cardBorderStyle="border-rounder-right" buttonPath="icecream" />
        <FactoryCard titleFirstLine="Top" titleSecondLine="Toppings." buttonColor="#E8CDB9"
            description="You can’t have a good Ice cream without toppings. Hence we got you with the cream of the crop."
            buttonText="Love" cardBorderStyle="border-regular" buttonPath="topping" />
        <FactoryCard titleFirstLine="The" titleSecondLine="Cones." buttonColor="#C0B9E8"
            description="Enjoy our certified list of Cones, made with love and care from the best Ice cream makers in the world."
            buttonText="Savor" cardBorderStyle="border-rounder-left" buttonPath="cone" />
        <FactoryCard titleFirstLine="A lot of" titleSecondLine="Flavors." buttonColor="#E8B9B9"
            description="Whe have the longest tradition of high quality flavors. From the minds of our researchers to you, for you."
            buttonText="Adore" cardBorderStyle="border-roundest-right" buttonPath="flavor" />
    </div>
</template>

<style scoped>
.factory-cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-content: center;
    gap: 45px;
}
</style>