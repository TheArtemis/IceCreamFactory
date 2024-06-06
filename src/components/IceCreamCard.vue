<script setup>
import TitleWithDescription from './TitleWithDescription.vue';
import MixedIceCreamTokenList from './MixedIceCreamTokenList.vue';
import SmoothButton from './SmoothButton.vue';
const IceCreamName = "Cioccolatella"
const tokens = [{
    id: 1,
    name: "Cono al Cioccolato",
    type: "cone"
},
{
    id: 2,
    name: "Nutella",
    type: "flavor"
},
{
    id: 3,
    name: "Panna",
    type: "topping"
},
{
    id: 4,
    name: "Granella di Nocciole",
    type: "topping"
}
]
</script>

<template>
    <div class="white-round-box card">
        <TitleWithDescription title="Cioccolatella"
            description="We heard everyone likes nutella. So we made it ice cream." title-size="28px"
            description-size="14px" />

        <MixedIceCreamTokenList :tokens="tokens" />

        <div class="button-get-wrapper">
            <SmoothButton button-text="Get" button-color="#B9E8E2" size="small" />
        </div>
    </div>
</template>

<style scoped>
.card {
    padding: 20px;
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #f4f4f4;
    border-radius: 20px;
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
}
</style>
