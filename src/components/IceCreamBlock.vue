<script setup>
import SmoothButton from '@/components/SmoothButton.vue';
import TitleWithDescription from '@/components/TitleWithDescription.vue';
import FavouriteIceCreamCard from '@/components/FavouriteIceCreamCard.vue'
import IceCreamCard from '@/components/IceCreamCard.vue';
import { onMounted, ref } from 'vue';
import { getAllIceCreams } from '@/api/iceCream';
import { toSingleTokenList } from '@/common/objectProcessing';
import { format, addPeriod } from '@/common/textFormatting';

const createIceCreamRoute = { name: "create-icecream" };

const iceCreams = ref(null);

onMounted(async () => {
    const iceCreamsDTO = await getAllIceCreams();
    if (iceCreamsDTO.code == 1) {
        iceCreams.value = iceCreamsDTO.icecreams;
        console.log(iceCreamsDTO)
        console.log(iceCreams.value)
    }

    else
        console.error(iceCreamsDTO.message);
})

</script>

<template>
    <div class="icecream-page-box white-round-box poppins-regular">
        <TitleWithDescription title="Express your creativity."
            description="Show us what we have not discovered yet. Reveal the ways of a new Ice Cream that will blow off our senses. Unveil a new horizon of pleasure and push the limits of taste. Create. Create now. Create here." />
        <div class=" button-wrapper">
            <SmoothButton class="create-button" button-color="#B9E8E2" text="create" size="big"
                :on-click="() => $router.push(createIceCreamRoute)" />
        </div>
        <div class="ice-cream selection">
            <TitleWithDescription title="Enjoy our premium selection."
                description="A curated set of our best Ice Creams. Don't waste time choosing, let our top notch Ice Creams choose you:" />
            <div class="favourites-grid">
                <FavouriteIceCreamCard iceCreamID="13" />
                <FavouriteIceCreamCard iceCreamID="14" />
                <FavouriteIceCreamCard iceCreamID="15" />
            </div>
            <TitleWithDescription title="Or choose your own from our vast offer."
                description="Our vast selection will leave you without words. " />


            <div v-if="iceCreams == null">
                <p>Loading...</p>
            </div>
            <div v-else class="icecream-selction-grid">
                <div v-for="iceCream in iceCreams" :key="iceCream.id">
                    <IceCreamCard :id="(iceCream.id).toString()" :title="format(iceCream.name)"
                        :description="addPeriod(iceCream.description)"
                        :tokens="toSingleTokenList(iceCream.flavors, iceCream.cone, iceCream.toppings)" />
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.icecream-page-box {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 900px;
    padding: 50px;
    /* height: 100%; */
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

.icecream-selction-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-top: 20px;
    padding-bottom: 20px;
    row-gap: 20px;

    -ms-overflow-style: none;
    scrollbar-width: none;

    .icecream-selction-grid::-webkit-scrollbar {
        display: none;
    }
}
</style>