<script setup>
import SmoothButton from '@/components/SmoothButton.vue';
import TitleWithDescription from '@/components/TitleWithDescription.vue';
import FavouriteIceCreamCard from '@/components/FavouriteIceCreamCard.vue'
import IceCreamCard from './IceCreamCard.vue';
</script>

<template>
    <div class="icecream-page-box white-round-box poppins-regular">
        <TitleWithDescription title="Express your creativity."
            description="Show us what we have not discovered yet. Reveal the ways of a new Ice Cream that will blow off our senses. Unveil a new horizon of pleasure and push the limits of taste. Create. Create now. Create here." />
        <div class=" button-wrapper">
            <SmoothButton class="create-button" button-color="#B9E8E2" button-text="create" size="big" />
        </div>
        <div class="ice-cream selection">

            <TitleWithDescription title="Enjoy our premium selection."
                description="A curated set of our best Ice Creams. Don't waste time choosing, let our top notch Ice Creams choose you:" />
            <div class="favourites-grid">
                <FavouriteIceCreamCard iceCreamID="13" />
                <FavouriteIceCreamCard iceCreamID="13" />
                <FavouriteIceCreamCard iceCreamID="13" />
            </div>
            <TitleWithDescription title="Or choose your own from our vast offer."
                description="Our vast selection will leave you without words. " />
            <IceCreamCard />

        </div>
    </div>
</template>

<style scoped>
.icecream-page-box {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 780px;
    padding: 50px;
    height: 3000px;
}

.button-wrapper {
    display: flex;
    flex-direction: row;
}

.create-button {
    margin-top: 20px;
    margin-left: auto;
}

.favourites-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
    overflow-x: auto;
    padding-bottom: 20px;

    -ms-overflow-style: none;
    scrollbar-width: none;

    .favourites-grid::-webkit-scrollbar {
        display: none;
    }
}
</style>